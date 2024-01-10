interface IUserFormater {
  userFormater(): string;
}

class User implements IUserFormater {
  constructor(private username: string, private age: number) {}
  userFormater(): string {
    return `user name ${this.username} and age ${this.age}`;
  }
}

let user = new User("Nahid Hossain", 27);

console.log(user.userFormater());
