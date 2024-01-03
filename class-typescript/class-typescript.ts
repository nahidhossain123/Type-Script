// a class is a bule print of an object instances.
// a class is a template definition of the method and variables in a particular kind of object

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`My name is ${this.age} and my age is ${this.age}`);
  }
}

const user = new User("Nahid Hossain", 27);
user.display();
