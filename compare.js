var obj1 = { name: "Vasu Arya", age: 24 };
var onj2 = { age: 24, name: "Vasu Arya" };

let count = 0;
let similarity = Object.keys(obj1);

for (let i of similarity) {
    if (obj1[i] == obj2[i]) {
        count++;
    }
}

if (count == similarity.length) {
    console.log("Both the Objects are same.");
}
else{
    console.log("Both the Objects are different.");
}