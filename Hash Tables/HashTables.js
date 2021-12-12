//The Hash Tables are represented as Objects in javascript.
//Small example on the Objects in js

let Person = {
    FullName: "Random Name",
    height: 1.86,
    weight: 82,
    Age: 35,
    nationality: "algerian",
    alive: true,
    occupation: "Web Developer",
    FavoriteLine: () => {
        console.log("I am learning Data Structures :^)")
    }
};

console.log(Person.weight); // O(1)

Person.address = "103.163.101.0"; // O(1)

Person.FavoriteLine(); // O(1)
