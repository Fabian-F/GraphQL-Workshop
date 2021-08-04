Mutation to fill the database with dummy values:
```
mutation Step1 {
  addBetreuer(name: "Jakob", lastname: "Klein", abteilung: "CES")
  addBetreuer(name: "Alexander", lastname: "Klein", abteilung: "CES")
  addAzubi(name: "Osal", lastname: "Gotschiew", betreuer_id: 1)
  addAzubi(name: "Steven", lastname: "Schulz", betreuer_id: 1)
  addAzubi(name: "Fabian", lastname: "Forster", betreuer_id: 2)
  addAzubi(name: "Bastian", lastname: "Wenta", betreuer_id: 2)
}
```
\
Query to get one azubi with id 1:
```
query azubi {
  azubi(id: 1) {
    name
    lastname
  }
}
```
\
Query to get all azubis:
```
query azubis {
  azubis {
    id
    name
    lastname
  }
}
```
\
Mutation to add one azubi:
```
mutation addAzubi {
  addAzubi(id: 4, name: "Alexander", lastname: "Klein")
}
```
\
Mutation to update an azubi:
```
mutation updateAzubi {
  updateAzubi(id: 2 name: "Test" lastname: "Test")
}
```
\
Mutation to remove an azubi:
```
mutation removeAzubi {
  removeAzubi(id: 5)
}
```