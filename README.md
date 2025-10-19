## Castor Retreat Clone
## Overview

This project is a full-stack clone of Castor Retreat, built with React (frontend) and Go (backend).
The frontend communicates with the backend REST APIs to display data and handle form submissions.

## Prerequisites

Please make sure the following are installed before running the project:

Go (version 1.19 or higher) → https://go.dev/dl/

Node.js (version 18 or higher) and npm → https://nodejs.org/

## Setup Instructions
## 1. Start the Backend
cd backend
go mod tidy
go run main.go


The backend will start on http://localhost:8080

## 2. Start the Frontend
cd frontend
npm install
npm start


The frontend will start on http://localhost:3000

It automatically connects to the backend running on http://localhost:8080

## Testing

Open http://localhost:3000
 in your browser to view the app.

Example API: http://localhost:8080/api/hotels
 returns hotel data in JSON format.

Contact form submissions are logged in contacts.json inside the backend folder.

## Notes

Ensure both backend and frontend are running simultaneously.

If any port is already in use, update it in the source files or terminate the existing process.