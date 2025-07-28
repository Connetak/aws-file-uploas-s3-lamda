#  AWS File Upload Web App (S3 + Lambda + API Gateway)

This is a beginner-friendly AWS project that allows users to upload files through a simple web interface hosted on **Amazon S3**, with the backend handled by **AWS Lambda** and **API Gateway**.

---

##  What This Project Does

✅ Host a static HTML form on **S3**  
✅ Use **JavaScript** to send file data to an **API Gateway endpoint**  
✅ Backend **Lambda function** receives the file and uploads it to S3  
✅ Successfully tested via **Postman** and browser interface

---

##  AWS Services Used

- **Amazon S3** – Static website hosting + file storage  
- **AWS Lambda** – Serverless function to handle file upload  
- **Amazon API Gateway** – Public API endpoint for Lambda  
- **Postman** – To test the backend APIs

---

##  Project Screenshot

This is the frontend (HTML + CSS) hosted on S3:

![AWS File Upload Screenshot](AF111060-5FE1-4DD0-B876-5A6536C1A284.jpeg)

> 👆 User uploads a file using this web interface

---

##  How It Works (Architecture)

1. User selects a file and clicks **Upload**
2. JavaScript sends the file to the **API Gateway endpoint**
3. API Gateway triggers a **Lambda function**
4. Lambda uploads the file to an S3 bucket
5. Returns a success message or file URL

---

##  Project Structure

