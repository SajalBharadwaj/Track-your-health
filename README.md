# FitTrack - MERN Stack Fitness Tracker with Docker

FitTrack is a full-stack fitness tracking application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to track workouts, monitor calories burned, visualize fitness statistics, and manage their health data through an interactive dashboard.

---

## Features

* User Authentication (Signup/Login)
* JWT-based Secure Authentication
* Workout Tracking
* Calories Burned Monitoring
* Active Minutes Tracking
* Interactive Dashboard with Charts
* Blog Articles Section
* Responsive UI with Tailwind CSS
* RESTful API Architecture
* Dockerized Frontend and Backend Services

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Shadcn UI
* Framer Motion
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt

### Security

* Helmet
* Validator

### DevOps

* Docker
* Docker Compose

---

## Project Structure

```bash
Track-your-health/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── constants/
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## Prerequisites

Before running this project, ensure you have installed:

* Node.js (v16 or later)
* npm
* Docker
* Docker Compose
* MongoDB Atlas Account

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Installation (Without Docker)

### Clone Repository

```bash
git clone https://github.com/SajalBharadwaj/Track-your-health.git

cd Track-your-health
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Run Using Docker

### Build and Start Containers

```bash
docker compose up --build
```

### Run in Detached Mode

```bash
docker compose up -d --build
```

### Stop Containers

```bash
docker compose down
```

---

## Application URLs

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

---

## Future Enhancements

* Email Verification
* Forgot Password
* Profile Image Upload
* AI-Based Fitness Recommendations
* Notifications System
* CI/CD Pipeline Integration
* Kubernetes Deployment

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Create a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Author

**Sajal Sharma**

GitHub: https://github.com/SajalBharadwaj

