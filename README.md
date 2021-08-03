Create Postgres Volume:\
`docker volume create postgres`

Start PostgreSQL Server (Docker):\
`docker run --name postgres -v postgres:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres`

Create Databases in Postgres:
- api\
`CREATE DATABASE api`

Create Tables in Postgres:
- betreuer(id, name, lastname, abteilung)\
`CREATE TABLE betreuer (
id SERIAL PRIMARY KEY,
name VARCHAR(30),
lastname VARCHAR(30),
abteilung VARCHAR(50)
);`

- azubi (id, name, lastname, betreuer_id)\
`CREATE TABLE azubi (
id SERIAL PRIMARY KEY,
name VARCHAR(30),
lastname VARCHAR(30),
FOREIGN KEY(betreuer_id) REFERENCES betreuer(id)
);`

Start GraphQL Instance:<br />
`node app.js`
