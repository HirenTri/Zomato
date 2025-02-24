
🍽️ Zomato Clone (Full Stack)  

A **full-stack** Zomato-inspired web application that enables users to explore restaurants, view menus, and place orders. This project follows a **MERN (MongoDB, Express.js, React, Node.js) stack** or a similar setup based on your chosen technologies.



## 🚀 Features  

### 🔹 **Frontend (React + Vite)**  
✅ Modern & responsive UI  
✅ Restaurant listings & menu pages  
✅ User authentication (Signup/Login)  
✅ Search & filter functionality  
✅ Interactive cart & order tracking  

### 🔹 **Backend (Node.js + Express + PostgreSQL/MongoDB)**  
✅ RESTful APIs for handling data  
✅ Secure authentication (JWT)  
✅ CRUD operations for menus, and users  
✅ Order management system  
✅ Payment gateway integration (if applicable)  

---

## 🛠️ Tech Stack  

| **Category**  | **Technology**  |
|--------------|---------------|
| **Frontend**  | React.js, Vite, Tailwind CSS  |
| **Backend**  | Node.js, Express.js  |
| **Database**  | PostgreSQL / MongoDB  |
| **Authentication**  | JWT (JSON Web Tokens)  |
| **Deployment**  | Render   |

 

📂 Project Structure  
 
Zomato-Clone
│── frontend/   # React (Vite) frontend
│   ├── src/
│   │   ├── components/    # UI Components
│   │   ├── pages/         # Pages (Home, Menu, Login, etc.)
│   │   ├── assets/        # Images, icons
│   │   ├── App.js         
│   │   └── index.js       
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     
│
│── backend/    # Express backend
│   ├── models/           # Database models
│   ├── routes/           # API Routes (auth, restaurants, orders)
│   ├── controllers/      # Business logic
│   ├── config/           # Database & env configs
│   ├── server.js         # Main server file
│   ├── middleware/       # Authentication & validation middleware
│   ├── package.json      # Backend dependencies
│   └── .env.example      # Environment variables sample
│
└── README.md



 🚀 Installation & Setup  

 1️⃣ Clone the Repository**  
 
git clone https://github.com/your-username/zomato-clone.git
cd zomato-clone
 

 2️⃣ Install Dependencies**  
 📌 Frontend  
 
cd frontend
npm install
npm run dev
 
 📌 Backend  
 
cd backend
npm install
node server.js
 

 

⚡ API Endpoints  

| Method | Endpoint          | Description |
|--------|------------------|-------------|
| **POST**   | `/api/auth/register`  | User Signup |
| **POST**   | `/api/auth/login`     | User Login  |
| **POST**   | `/api/orders`         | Place an order |
| **GET**    | `/api/orders/:userId` | Get user orders |



🎨 UI Preview  

📌 [Live Demo](https://zomato-frontent-mmjb.onrender.com)
For Admin Panel-[Live Demo](https://zomato-admin.onrender.com)
🌍 Deployment  

Frontend: Render
Backend: Render  
Database:MongoDB Atlas  

---

 
