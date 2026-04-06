# docker-node-mongodb

This is a containerized full-stack project demonstrating Docker networking, isolation, and orchestration.

## What I Built

- **Backend:** Node.js with Express and Mongoose
- **Database:** MongoDB running in a separate container
- **Frontend:** Simple HTML/JS interface (or React/Vue if you used it)
- **Docker Compose:** To run backend, frontend, and MongoDB together

## What I Learned

- How to create Dockerfiles for Node.js and MongoDB services
- Setting up multi-container applications with Docker Compose
- Connecting services using Docker networks (frontend ↔ backend ↔ database)
- Isolating services to enhance security (frontend cannot access database directly)
- Scaling backend containers and understanding Docker service discovery
- Debugging container connectivity issues without relying on host utilities like ping

## How to Run

```bash
# Start all containers
docker-compose up -d

# Check backend API
curl http://localhost:5000/tasks
