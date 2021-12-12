//The Hash Tables are represented as Objects in javascript.
//Small example on the Objects in js

// let Person = {
//     FullName: "Random Name",
//     height: 1.86,
//     weight: 82,
//     Age: 35,
//     nationality: "algerian",
//     alive: true,
//     occupation: "Web Developer",
//     FavoriteLine: () => {
//         console.log("I am learning Data Structures :^)")
//     }
// };

// console.log(Person.weight); // O(1)

// Person.address = "103.163.101.0"; // O(1)

// Person.FavoriteLine(); // O(1)

////////////////////////////////////////////////////////////////////////////////////

// Let's manually create HashTable

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0;i<key.length;i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length ;
        }
        return hash;
    }
    set(key,value){
        if(this.data[this.data.length-1]!==undefined) return console.log("the map is full")
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]===undefined){
                this.data[i] = [key,value];
                break;
            }
        }
    }
    get(key){
        for(let i=0;i<this.data.length;i++){
            if(this.data[i][0]===key) return console.log(this.data[i][1]);
            break;
        }
        return console.log("element not found");
    }
}

let MyHashTable = new HashTable(15);

MyHashTable._hash("hadouken") //testing the has function

MyHashTable.set("Hadouken","Shoryuken") //adding an element in the hash table

MyHashTable.get("Hadouken") //getting the key's value if it exists , if not return "element not found"  

