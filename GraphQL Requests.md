Mutation to fill the database with dummy values:
```
mutation Step1 {
  betreuer1: addBetreuer(name: "Max", lastname: "Mustermann", abteilung: "Abteilung A")
  betreuer2: addBetreuer(name: "Karen", lastname: "Musterfrau", abteilung: "Abteilung B")
  azubi1: addAzubi(name: "Luigi", lastname: "Mario", betreuer_id: 1)
  azubi2: addAzubi(name: "Mario", lastname: "Mario", betreuer_id: 1)
  azubi3: addAzubi(name: "Peach", lastname: "Toadstool", betreuer_id: 2)
  azubi4: addAzubi(name: "Daisy", lastname: "Desert", betreuer_id: 2)
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