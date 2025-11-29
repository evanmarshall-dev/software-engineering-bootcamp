---
description:
---

Database Seeding Workflow

Goal: Create a script to populate the database with dummy data. Steps:

Analyze the database schema or ORM models (e.g., SQLAlchemy models, Prisma schema).

Identify relationships between tables (foreign keys).

Create a script (e.g., seed.py or seed.ts) that uses a faker library to generate 50 realistic records for each table.

Ensure records are inserted in the correct order to satisfy foreign key constraints.
