Text-to-Image Generator (MERN Stack)



🚀 Overview

The Text-to-Image Generator is a MERN stack application that converts text descriptions into images using AI-based image generation models. It provides an intuitive UI to input text and generates images in real time.

🌟 Features

📝 User-friendly interface for text input

🎨 AI-powered image generation

📂 Image history storage for users

🔍 Search and filter images

🚀 Fast and scalable backend using Node.js and Express

💾 MongoDB database for managing user data and image storage

🔐 Authentication & Authorization with JWT

☁️ Cloud storage support (optional)

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT

Deployment: Vercel (Frontend), Render/Heroku (Backend)

📦 Installation

Prerequisites

Node.js & npm

MongoDB (Local or Atlas)

Cloudinary (Optional for cloud image storage)

Clone the Repository

git clone https://github.com/Krishnakhandelwal123/text-to-image.git
cd text-to-image

Backend Setup

cd server
npm install

Create a .env file in the server directory and add:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_api_key (optional)
CLOUDINARY_SECRET=your_secret_key (optional)

Run the server:

npm start

Frontend Setup

cd ../client
npm install
npm start

🚀 Deployment

Deploying Frontend (Vercel)

vercel --prod

Deploying Backend (Render/Heroku)

Push your code to GitHub

Connect to Render/Heroku and deploy

📷 Screenshots

Home Page

Image Generation





🛡️ Security & Authentication

JWT-based authentication

OAuth support (Optional)

🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.


📬 Contact

Krishna Khandelwal📧 Email: krishnakhandelwal1231999@gmail.com🔗 GitHub: Krishnakhandelwal123

