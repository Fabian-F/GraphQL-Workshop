Create Postgres Volume:
docker volume create postgres

Start PostgreSQL Server (Docker):
docker run --name postgres -v postgres:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

Create Databases in Postgres:
- api

Create Tables in Postgres:
- azubi (id, name, lastname)

Start GraphQL Instance:
node app.js
