abstract class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract display(): void;
}

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
