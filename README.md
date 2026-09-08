# Student Registration Microservices

This repository contains a simple student registration example using:

- Backend: Spring Boot microservices (student-service, registration-service)
- Frontends: React (frontend-react) and Angular (frontend-angular)
- In-memory H2 database for development
- Dockerfiles for each component and a docker-compose.yml to run everything locally

Quick start (dev):

1. Build and run with Docker Compose (requires Docker & Docker Compose):

   docker-compose up --build

2. Endpoints:

- Student service: http://localhost:8081/api/students
- Registration service: http://localhost:8082/api/registrations
- React UI: http://localhost:3000
- Angular UI: http://localhost:4200

Notes:
- This is a scaffold intended for local development. See each service README for details.
