const numbers = [1, 2, 3, 4, 5, 6, 7];
let [num1, num2, ...others] = numbers;
console.log(num1, num2, others);


const person = {
        name: 'John',
        age: 20,
        eyeColor: 'Blue'
}


let { name: person1Name, age: person1Age } = person;
console.log(person1Name, person1Age);