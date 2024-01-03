// code reuseablity is one of the best freature of object oriented programming
// inheritance allow child classes to use method variable from its parent class

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  display(): void {
    console.log(`My name is ${this.age} and my age is ${this.age}`);
  }
}

const user = new User("Nahid Hossain", 27);
user.display();

class Students extends User {
  studentId: number;
  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `My name is ${this.age} and my age is ${this.age} and ID is ${this.studentId}`
    );
  }
}

let student = new Students("Nikki hasan", 27, 2016260136);
student.display();
