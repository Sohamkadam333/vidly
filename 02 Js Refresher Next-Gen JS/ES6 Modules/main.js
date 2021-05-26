import User, { printName as printUserName, printAge as printUserAge } from './user.js'


const user = new User('John', 20);
console.log(user);
printUserName(user);
printUserAge(user)