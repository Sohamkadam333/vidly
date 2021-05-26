class Human {
        gender = 'Male';

        printGender = () => {
                console.log(this.gender);
        }
};

class Person extends Human {
        // super();
        name = 'John'
        printMyName = () => {
                console.log(this.name);
        }
};


const person1 = new Person();
person1.printMyName();
person1.printGender();

