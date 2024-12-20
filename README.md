# Authentication System in Node.js

This project demonstrates a simple authentication system built with Node.js, Express, and MongoDB. It allows users to sign up, log in, and manage authentication tokens with JWT (JSON Web Token).

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project provides a backend authentication system for users to securely log in and receive JWT tokens. It includes functionalities such as:

- User registration (sign up)
- User authentication (sign in)
- Token-based authentication for protected routes
- Cookie-based JWT management

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js to build APIs.
- **MongoDB**: NoSQL database for storing user information.
- **Mongoose**: MongoDB object modeling tool.
- **JWT (JSON Web Token)**: Token-based authentication system.
- **bcrypt**: Library for hashing passwords.
- **dotenv**: Manages environment variables.
- **cookie-parser**: Middleware for parsing cookies in requests.
- **helmet**: Security middleware for Express.
- **morgan**: HTTP request logger middleware.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/authentication-system.git
```
2. Navigate to the project directory:
3. Install the required dependencies:
    npm install
4. Create a .env file in the root directory of the project and add the following environment variables:
   
      JWT_SECRET_KEY=your_secret_key
      MONGO_URI=your_mongodb_connection_string
      NODE_ENV=development
      PORT=3000

## Folder Structure

backend
│
├── controllers/          # Handle business logic for routes
│   ├── authController.js  # Sign up and sign in logic
│
├── middleware/           # Middleware functions
│   ├── protectRoute.js   # Middleware for protecting routes with JWT
│
├── models/               # Mongoose models
│   ├── user.model.js     # User schema and model
│
├── routes/               # API routes
│   ├── authRoutes.js     # Authentication related routes (sign up, sign in)
│
├── utils/                # Utility functions
│   ├── generateTokenAndSetCookie.js  # Generate JWT and set cookie
│
├── .gitignore            # Git ignore file to avoid pushing sensitive data
├── db.js                 # MongoDB connection setup
├── index.js              # Entry point of the application
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation




