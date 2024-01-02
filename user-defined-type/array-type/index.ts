// let users: string[];
let users: Array<string>;

users = ["Nahid", "Santho", "Sakib", "Babor", "Habib"];

users.forEach((item) => {
  console.log("My Name is:", item);
});

///Array with multiple types
// let members: string| number []
let members: Array<string | number>;

members = [225, "Nahid"];
