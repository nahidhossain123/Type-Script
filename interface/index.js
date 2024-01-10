var Users = [];
var user1 = {
    name: "Nahid Hossain",
    age: 27,
    isAdmin: true,
};
Users.push(user1);
var user2 = {
    name: "Rahiful Isalm",
    age: 27,
    isAdmin: false,
};
Users.push(user2);
var UserInfo = function (user) {
    console.log("User namie is ".concat(user.name, " age is ").concat(user.age, " and is admin ").concat(user.isAdmin ? "Yes" : "No"));
};
Users.forEach(function (item) { return UserInfo(item); });
