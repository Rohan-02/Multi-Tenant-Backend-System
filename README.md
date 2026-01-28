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

========================================
  How Multi-Tenancy Is Implemented
========================================
• Each User is associated with a tenantId
• Each Order is linked to both tenantId and userId
• Admin users can create new tenants
• Normal users are assigned to an existing tenant


🔒 Tenant Isolation Strategy
----------------------------
• Every protected API request extracts tenantId from the JWT token
• All database queries are filtered using tenantId
• Cross-tenant access is explicitly blocked

Example:
---------
const filter = { tenantId };

This ensures users can only access data belonging to their own tenant.


🔐 Authentication & Authorization Flow
--------------------------------------

Authentication
--------------
• Users register and log in using email and password
• Passwords are securely hashed using bcrypt
• On successful login, a JWT token is generated containing:
    - userId
    - tenantId
    - role

Authorization
-------------
• JWT is verified using a centralized middleware (authMiddleware)
• Role-based access is enforced:

    Admin:
      - Can manage tenants
      - Can view all users within a tenant

    User:
      - Can only access their own orders

Middleware Flow:
----------------
Request → JWT Verification → Role Check → Controller Logic


📦 Key API Endpoints
-------------------

Authentication
--------------
POST /api/auth/register   → Register user
POST /api/auth/login      → Login user

Tenants
-------
POST /api/tenants         → Create tenant (Admin only)
GET  /api/tenants/:id     → Get tenant details

Orders
------
POST /api/orders          → Create order
GET  /api/orders          → View tenant orders
GET  /api/orders/:id      → View order by ID

Users
-----
GET /api/user             → View users within tenant (Admin only)


▶️ How to Run Locally
--------------------

1️⃣ Clone the repository
-----------------------
git clone https://github.com/Rohan-02/Multi-Tenant-Backend-System.git
cd Multi-Tenant-Backend-System

2️⃣ Install dependencies
-----------------------
npm install

3️⃣ Configure environment variables
-----------------------------------
Create a .env file in the root directory:

PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Start the server
-------------------
npm start

Server will run at:
------------------
http://localhost:3000


📈 Future Improvements
---------------------
• Refresh token implementation
• Pagination and filtering for large datasets
• Rate limiting and request throttling
• Centralized logging and monitoring
• Dockerization for deployment


👨‍💻 Author
-----------
Rohan Kondam

GitHub:
https://github.com/Rohan-02

LinkedIn:
https://www.linkedin.com/in/kondam-rohan-1197a3215/

========================================
