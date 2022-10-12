people = {
  name: "John",
  lastName: "Doe",
  age: "25",
  hobbies: ["football", "basketball", "tennis"],
  status: true,
};

peoples = {
  "persona1": {
    "name": "John",
    "lastName": "Doe",
    "age": 25,
    "hobbies": ["football", "basketball", "tennis"],
    "status": true,
  },
  "persona2": {
    "name": "Maria",
    "lastName": "Perez",
    "age": 23,
    "hobbies": ["dance", "music", "tennis"],
    "status": true
  },
  "persona3": {
    "name": "Pedro",
    "lastName": "Picapiedra",
    "age": 18,
    "hobbies": ["football", "golf", "tennis"],
    "status": false
  },
  "persona4": {
    "name": "Pepito",
    "lastName": "Perez",
    "age": 40,
    "hobbies": ["run", "basketball", "tennis"],
    "status": false
  },
};

//console.log(typeof(people))
/* console.log("Nombre:", people["name"], "Edad:", people.age)
console.log(people.lastName)
console.log(people["status"])
console.log(people.hobbies[2]) */

/* if (people.age === 25) {
    console.log("Usted es mayor de edad")
} */

/* for (let i in people) {
    console.log(people[i])   
} */

/* console.log(peoples.persona3.name) */
let suma = 0;
for(let i in peoples){
    if(peoples[i].status){
        console.log(peoples[i])
    }
    suma += peoples[i].age
}
console.log(suma)