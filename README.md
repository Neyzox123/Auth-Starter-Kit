# 🔐 Auth Starter Kit

A clean, minimal authentication API starter kit built with **Node.js**, **Express**, and **MySQL**. Designed to be dropped straight into your next project — register and login endpoints, password hashing, and JWT-ready structure, no bloat.

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/bcrypt-6E4C13?style=for-the-badge" />
</p>

---

## ✨ Features

- 📝 User registration with hashed passwords (bcrypt)
- 🔑 JWT-based authentication *(in progress)*
- 🗄️ MySQL database with versioned SQL migrations
- ⚙️ Environment-based configuration (`.env`)
- 🌐 CORS-ready Express API
- 🧱 Clean, minimal, and easy to extend

---

## 🛠️ Tech Stack

| Tech | Use |
|------|-----|
| **Node.js** | Runtime |
| **Express** | Web framework / routing |
| **MySQL2** | Database driver |
| **bcrypt** | Password hashing |
| **jsonwebtoken** | Auth tokens |
| **dotenv** | Environment configuration |
| **cors** | Cross-origin request handling |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Neyzox123/Auth-Starter-Kit.git
cd Auth-Starter-Kit/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your environment

Copy `.env.example` to `.env` and fill in your own values:

```env
BACKEND_PORT=8080
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=db
DB_PORT=3306
JWT_SECRET=your_secret_key
```

### 4. Run the database migrations

```bash
sudo mysql -u root -p < ../database/0001.sql
```

### 5. Start the server

```bash
node server.js
```

---

## 📡 API Endpoints

| Method | Endpoint | Description | Status |
|--------|----------|--------------|--------|
| `POST` | `/api/register` | Create a new user | ✅ |
| `POST` | `/api/login` | Authenticate a user | 🚧 In progress |

### Example — Register

```bash
curl -X POST http://localhost:8080/api/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"1234"}'
```

---

## 📂 Project Structure

```
Auth-Starter-Kit/
├── backend/
│   ├── server.js
│   ├── db.js
│   └── .env
├── database/
│   └── 0001.sql
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🗺️ Roadmap

- [x] User registration
- [ ] User login
- [ ] JWT issuing & verification
- [ ] Protected route example
- [ ] Password reset flow

---

## 📄 License

This project is licensed under the terms of the LICENSE file included in this repository.

---

<p align="center">
  Made with ❤️ by <b>Neyzox</b>
</p>
