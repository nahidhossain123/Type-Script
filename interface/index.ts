interface IUser {
  name: string;
  age: number;
  isAdmin: boolean;
}

let Users: IUser[] = [];

let user1: IUser = {
  name: "Nahid Hossain",
  age: 27,
  isAdmin: true,
};
Users.push(user1);

let user2: IUser = {
  name: "Rahiful Isalm",
  age: 27,
  isAdmin: false,
};

Users.push(user2);

const UserInfo = (user: IUser): void => {
  console.log(
    `User namie is ${user.name} age is ${user.age} and is admin ${
      user.isAdmin ? "Yes" : "No"
    }`
  );
};

Users.forEach((item) => UserInfo(item));
