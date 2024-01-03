//Object type

let students: object[];
students = [];

let student1: {
  userName: string;
  age: number;
};

student1 = {
  userName: "Nahid Hossain",
  age: 27,
};

students.push(student1);

let student2: {
  userName: string;
  age: number;
};

student2 = {
  userName: "Nikita Hossain",
  age: 27,
};

students.push(student2);

console.log("Student List:", students);
