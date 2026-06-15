# ✂️ Short_Url

A full-stack URL Shortener application built with **React**, **Node.js**, **Express**, and **MongoDB**. Generate short links, manage your URLs, and track click analytics through a clean and responsive user interface.

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Express](https://img.shields.io/badge/Express-5-black?logo=express)

---

## 🚀 Features

* 🔗 Generate short URLs instantly using unique IDs
* 📊 Track click analytics and visit history
* 🔐 Secure JWT-based authentication and authorization
* 👤 User registration and login system
* 📱 Responsive and modern React UI
* 🌐 RESTful API built with Express.js
* 💾 MongoDB database integration with Mongoose
* 🚦 Protected routes for authenticated users

---

## 📁 Project Structure

```text
Short_Url
├── backend
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── service
│   ├── connection.js
│   └── index.js
│
└── frontend
    ├── pages
    ├── context
    ├── utils
    ├── App.jsx
    └── main.jsx
```

---

## 🛠️ Tech Stack

| Category          | Technology                   |
| ----------------- | ---------------------------- |
| Frontend          | React 18, React Router, Vite |
| Backend           | Node.js, Express.js          |
| Database          | MongoDB, Mongoose            |
| Authentication    | JWT (JSON Web Tokens)        |
| ID Generation     | nanoid                       |
| API Communication | Axios / Fetch                |

---

## ⚡ Getting Started

### Prerequisites

* Node.js (v18 or above)
* MongoDB (Local Installation or Atlas)
* Git

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AbhishekSharma061001/Short_Url.git
cd Short_Url
```

### 2️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=8000
MONGO_URL=mongodb://localhost:27017/short-url
JWT_SECRET=your_secret_key
```

### 3️⃣ Start MongoDB

```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```

Or use MongoDB Atlas and update the `MONGO_URL`.

### 4️⃣ Run the Backend

```bash
cd backend
npm install
npm start
```

Backend will run on:

```text
http://localhost:8000
```

### 5️⃣ Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## 👨‍💻 Author

**Abhishek Sharma**

GitHub: https://github.com/AbhishekSharma061001
