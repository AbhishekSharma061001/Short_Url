# ✂️ Short_Url
  
  A full-stack URL shortener application built with **React** and **Node.js**. Shorten long URLs, track clicks, and manage your links — all with a clean, modern interface.
  
  ![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
  ![React](https://img.shields.io/badge/React-18-blue?logo=react)
  ![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
  ![Express](https://img.shields.io/badge/Express-5-black?logo=express)
  
  ---
  
  ## 🚀 Features
  
  - 🔗 **Shorten URLs** — Generate 8-character short links instantly
  - 📊 **Click Analytics** — Track total clicks and visit history with timestamps
  - 🔐 **User Authentication** — JWT-based signup/login system
  - 🎨 **Modern UI** — Clean, light aesthetic theme with responsive design
  - 🌐 **CORS Enabled** — Frontend and backend can run independently
  
  ---
  
  ## 📁 Project Structure
  
  Short_Url/
  ├── backend/
  │   ├── index.js              # Express server entry point
  │   ├── connection.js         # MongoDB connection
  │   ├── package.json
  │   ├── controllers/
  │   │   ├── urlControllers.js # URL shortening & analytics logic
  │   │   └── user.js           # Signup & login logic
  │   ├── middlewares/
  │   │   └── auth.js           # JWT authentication & role-based access
  │   ├── models/
  │   │   ├── url.js            # URL schema (shortId, redirectURL, visitHistory)
  │   │   └── user.js           # User schema (name, email, password, role)
  │   ├── routes/
  │   │   ├── urlRoutes.js      # /url routes
  │   │   └── user.js           # /user routes
  │   └── service/
  │       └── auth.js           # JWT sign & verify helpers
  └── frontend/
      ├── index.html
      ├── package.json
      ├── vite.config.js
      └── src/
          ├── App.jsx           # Routing & protected routes
          ├── main.jsx          # React entry point
          ├── index.css         # Light aesthetic theme
          ├── context/
          │   └── AuthContext.jsx  # Auth state management
          ├── pages/
          │   ├── Home.jsx      # URL shortener + links table
          │   ├── Login.jsx     # Login form
          │   └── Signup.jsx    # Signup form
          └── utils/
              └── api.js        # API helper with Bearer token
  
  ---
  
  ## 🛠️ Tech Stack
  
  | Layer | Technology |
  |-------|-----------|
  | Frontend | React 18, React Router, Vite |
  | Backend | Node.js, Express 5 |
  | Database | MongoDB, Mongoose |
  | Auth | JSON Web Tokens (JWT) |
  | ID Generation | nanoid |
  
  ---
  
  ## ⚡ Getting Started
  
  ### Prerequisites
  
  - [Node.js](https://nodejs.org/) (v18+)
  - [MongoDB](https://www.mongodb.com/docs/manual/installation/) (local or Atlas)
  
  ### 1. Clone the repository
  
  ```bash
  git clone https://github.com/AbhishekSharma061001/Short_Url.git
  cd Short_Url
  
  2. Start MongoDB
  
  # macOS (Homebrew)
  brew services start mongodb-community
  
  # Linux
  sudo systemctl start mongod
  
  # Or use MongoDB Atlas (update connection string in backend/connection.js)
  
  3. Start the Backend
  
  cd backend
  npm install
  npm start
  
  Server runs at http://localhost:8000
  
  4. Start the Frontend
  
  cd frontend
  npm install
  npm run dev
  
  App runs at http://localhost:3000
  
  ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  
  📡 API Endpoints
  
  ┌────────┬─────────────────────────┬──────┬───────────────────────────────┐
  │ Method │ Endpoint                │ Auth │ Description                   │
  ├────────┼─────────────────────────┼──────┼───────────────────────────────┤
  │ POST   │ /user                   │ ❌   │ Register a new user           │
  ├────────┼─────────────────────────┼──────┼───────────────────────────────┤
  │ POST   │ /user/login             │ ❌   │ Login & get JWT token         │
  ├────────┼─────────────────────────┼──────┼───────────────────────────────┤
  │ GET    │ /url                    │ ✅   │ Get all user's shortened URLs │
  ├────────┼─────────────────────────┼──────┼───────────────────────────────┤
  │ POST   │ /url                    │ ✅   │ Create a new short URL        │
  ├────────┼─────────────────────────┼──────┼───────────────────────────────┤
  │ GET    │ /url/analytics/:shortId │ ✅   │ Get click analytics for a URL │
  ├────────┼─────────────────────────┼──────┼───────────────────────────────┤
  │ GET    │ /:shortId               │ ❌   │ Redirect to original URL      │
  └────────┴─────────────────────────┴──────┴───────────────────────────────┘
  
  Authentication
  
  Send the JWT token in the Authorization header:
  
  Authorization: Bearer <your-token>
  
  ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  
  📝 Usage
  
  1. Sign up with your name, email, and password
  2. Login to get access to the dashboard
  3. Paste a long URL and click "Shorten"
  4. Copy the short URL and share it
  5. Track clicks in the table on your dashboard
  
  ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  
  🤝 Contributing
  
  1. Fork the repository
  2. Create a feature branch (git checkout -b feature/amazing-feature)
  3. Commit changes (git commit -m 'feat: add amazing feature')
  4. Push to branch (git push origin feature/amazing-feature)
  5. Open a Pull Request
