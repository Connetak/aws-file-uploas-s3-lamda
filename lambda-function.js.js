const AWS = require('aws-sdk');
const Busboy = require('busboy');

const s3 = new AWS.S3();

exports.handler = async (event) => {
  return new Promise((resolve, reject) => {
    const busboy = new Busboy({
      headers: {
        'content-type': event.headers['Content-Type'] || event.headers['content-type']
      }
    });

    let uploadData = null;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      let buffer = [];
      file.on('data', (data) => buffer.push(data));
      file.on('end', () => {
        uploadData = {
          filename,
          mimetype,
          buffer: Buffer.concat(buffer)
        };
      });
    });

    busboy.on('finish', async () => {
      const params = {
        Bucket: 'your-s3-bucket-name', // 🔁 Replace with your S3 bucket name
        Key: uploadData.filename,
        Body: uploadData.buffer,
        ContentType: uploadData.mimetype
      };

      try {
        const result = await s3.upload(params).promise();
        resolve({
          statusCode: 200,
          headers: { "Access-Control-Allow-Origin": "*" },
          body: JSON.stringify({ message: 'File uploaded successfully', url: result.Location })
        });
      } catch (err) {
        reject({
          statusCode: 500,
          headers: { "Access-Control-Allow-Origin": "*" },
          body: JSON.stringify({ error: err.message })
        });
      }
    });

    busboy.write(Buffer.from(event.body, 'base64'));
    busboy.end();
  });
};
