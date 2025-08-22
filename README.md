
---

## 📄 Backend `README.md`

```markdown
# ⚙️ Backend for Organization-Level Live Chat Application

This repository contains the **backend server** for the [Live Chat App Frontend](https://github.com/Kirito1610/MessageFriend.git).  
The backend is responsible for **authentication, Stream Chat integration, and token generation**.  

---

## 🚀 Features

- **User Management**  
  - Handles user signup/login (username, email, phone, avatar).  
  - Connects user data with **Stream Chat database**.  

- **Authentication**  
  - Generates and returns **Stream Auth Token**.  
  - Ensures only authenticated users can access chat services.  

- **Stream Chat Integration**  
  - Establishes connection with **Stream Chat server**.  
  - Syncs user info (username, email, number, avatar).  
  - Provides endpoints to create and manage users.  

- **Security**  
  - Hides API keys using environment variables.  
  - Tokens are securely signed using **Stream API Secret**.  

---

## 🛠️ Tech Stack

- **Node.js**  
- **Express.js**  
- **Stream Chat (server SDK)**  

---

## 📂 Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Kirito1610/LiveChAT.git
