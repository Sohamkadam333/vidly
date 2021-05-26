const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);

const [a, b, c, ...newNumbers1] = newNumbers;
console.log(a, b, c, newNumbers1);



const person = {
        name: 'John',

}

const newPerson2 = {
        ...person,
        age: 20
}

console.log(newPerson2);