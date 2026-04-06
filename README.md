# finance-backend
# 💰 Finance Data Processing & Access Control Backend

## 🚀 Overview

This project is a backend system designed for a finance dashboard that manages financial records, user roles, and access control. It demonstrates backend engineering concepts such as API design, authentication, authorization, data modeling, and analytics.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Tokens)
* **Password Security:** bcryptjs

---

## 📁 Project Structure

```
finance-backend/
├── src/
│   ├── config/         # Database connection
│   ├── controllers/    # Business logic
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── middleware/     # Auth & role checks
│   └── app.js
├── server.js
├── .env
└── package.json
```

---

## 🔐 Authentication & Authorization

### User Roles

* **Viewer:** Can view dashboard data
* **Analyst:** Can view records and analytics
* **Admin:** Full access (CRUD operations + user control)

### Features

* User registration & login
* Password hashing using bcrypt
* JWT-based authentication
* Role-based access control using middleware

---

## 💰 Financial Records

### Fields

* Amount
* Type (income / expense)
* Category
* Date
* Notes
* CreatedBy (User reference)

### Supported Operations

* Create record
* Get all records
* Update record
* Delete record

---

## 📊 Dashboard APIs

### 1. Summary

* Total income
* Total expenses
* Net balance

### 2. Category-wise Data

* Aggregated totals by category

---

## 🔗 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register user     |
| POST   | /api/auth/login    | Login & get token |

---

### 💰 Record Routes

| Method | Endpoint         | Access         |
| ------ | ---------------- | -------------- |
| POST   | /api/records     | Admin          |
| GET    | /api/records     | Admin, Analyst |
| PUT    | /api/records/:id | Admin          |
| DELETE | /api/records/:id | Admin          |

---

### 📊 Dashboard Routes

| Method | Endpoint                | Access         |
| ------ | ----------------------- | -------------- |
| GET    | /api/dashboard/summary  | All roles      |
| GET    | /api/dashboard/category | Admin, Analyst |

---

## 🔑 Authentication Usage

All protected routes require a JWT token:

```
Authorization: Bearer <your_token>
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone <your-repo-link>
cd finance-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run Server

```
npm run dev
```

---

## 🧪 Testing APIs

Use tools like:

* Thunder Client (VS Code)
* Postman

---

## ⚠️ Assumptions

* Roles are predefined (viewer, analyst, admin)
* Authentication is token-based (JWT)
* MongoDB is used as primary database
* No frontend included

---

## 🌟 Key Highlights

* Clean backend architecture
* Secure authentication & authorization
* Role-based access control
* Aggregation-based analytics
* Scalable and maintainable design

---

## 📌 Future Improvements

* Pagination & filtering
* Search functionality
* Unit testing
* Deployment (Render / Railway)
* API documentation (Swagger)

---

## 👨‍💻 Author

Sai Varun
B.Tech Student | Backend Developer
