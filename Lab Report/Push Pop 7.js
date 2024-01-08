const people = [
    { name: "Rakesh", age: 30 },
    { name: "Shyam", age: 25 },
    { name: "Kapil", age: 35 }
];

const newPerson = { name: "Prasanga", age: 28 };
people.push(newPerson);

people.pop();

console.log(people);
