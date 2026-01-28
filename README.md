# Multi-Tenant Backend System

A secure multi-tenant backend system built using **Node.js, Express.js, and MongoDB**.  
The application supports **tenant-level data isolation**, **JWT-based authentication**, and **role-based access control** for Admin and User roles.

This project demonstrates backend system design concepts such as multi-tenancy, authentication, authorization, and clean API architecture.

---

## 🚀 What This Project Does

- Supports **multiple tenants (organizations)** within a single backend system
- Ensures **strict data isolation** between tenants
- Implements **JWT-based authentication** with role-based authorization
- Allows Admin users to manage tenants and users
- Enables Users to create and view tenant-scoped orders
- Provides secure RESTful APIs with middleware-based access control

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT (Access Tokens)  
- **Security:** bcrypt password hashing  
- **Architecture:** MVC-style (Controllers, Routes, Models, Middleware)  
- **Environment Management:** dotenv  

---

## 🧩 Project Architecture

```text
Backend/
│── controllers/
│   ├── auth.Controller.js
│   ├── order.Controller.js
│   ├── tenent.Controller.js
│   └── user.Controller.js
│
│── database/
│   └── db.js
│
│── middlewares/
│   └── authMiddleware.js
│
│── models/
│   ├── User.js
│   ├── Tenent.js
│   └── Order.js
│
│── routes/
│   ├── auth.routes.js
│   ├── order.routes.js
│   ├── tenent.routes.js
│   └── user.routes.js
│
│── server.js
│── .env
│── package.json
