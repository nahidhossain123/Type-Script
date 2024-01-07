let userInfo: () => void;
let userInfo1: (name: string) => void;
let userInfo2: (name: string, age: number) => string;

userInfo = () => {
  console.log("This is a simple function");
};

userInfo();

userInfo1 = (name) => {
  console.log(
    "This is a siple function that receieve a string parameter" + name
  );
};

userInfo1("Nahid Hossain");

userInfo2 = (name, age) => {
  return `this a simple funciton that receieves two parameter ${name} and ${age} and return a string`;
};

console.log(userInfo2("Nahid Hossain", 27));
