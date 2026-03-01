# 🌤 Weather Dashboard

A full-stack weather app built with Flask and React, containerized with Docker.

## Features
- 🔍 Search weather by city
- 📍 Auto-detect your location
- 🌡 Temperature, humidity, feels like
- 🐳 Dockerized for easy setup

## Tech Stack
- **Backend:** Python, Flask, OpenWeatherMap API
- **Frontend:** React, Vite
- **DevOps:** Docker, Docker Compose

## Setup

### Without Docker
# Backend
cd backend
pip install -r requirements.txt
python app.py

# Frontend
cd frontend
npm install
npm run dev

### With Docker
docker-compose up --build

## Environment Variables
Create `backend/.env`:
OPENWEATHER_API_KEY=your_key_here

## Live at
http://localhost:5173
