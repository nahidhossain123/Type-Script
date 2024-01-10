var User = /** @class */ (function () {
    function User(username, age) {
        this.username = username;
        this.age = age;
    }
    User.prototype.userFormater = function () {
        return "user name ".concat(this.username, " and age ").concat(this.age);
    };
    return User;
}());
var user = new User("Nahid Hossain", 27);
console.log(user.userFormater());
