---
description:
---

Dockerization Workflow

Goal: Containerize the current application. Steps:

Analyze the codebase to detect the language (Node, Python, Go) and dependencies (package.json, requirements.txt).

Create a Dockerfile optimized for production (use multi-stage builds if possible).

Create a .dockerignore file to exclude node_modules, .git, and .env.

Create a docker-compose.yml file if a database is detected in the code configuration.
