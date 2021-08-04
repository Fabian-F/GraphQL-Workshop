Create Postgres Volume:\
```docker volume create postgres```

Start PostgreSQL Server (Docker):\
`docker run --name postgres -v postgres:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres`

Login in PostgreSQL Docker as postgres User:\
`psql -U postgres`

Create Databases in Postgres:
- api\
`CREATE DATABASE api;`

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
betreuer_id SERIAL,
FOREIGN KEY(betreuer_id) REFERENCES betreuer(id)
);`

Check if everything worked with:\
`\d Azubi \d Betreuer`\
Should look like that\
![2021-08-04_09h49_59](https://user-images.githubusercontent.com/44290829/128142825-346edabd-7427-4fef-b7ed-0d0b6385e39f.png)


Start GraphQL Instance:<br />
`node .\src\app.js`
