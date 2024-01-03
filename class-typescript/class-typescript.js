var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("My name is ".concat(this.age, " and my age is ").concat(this.age));
    };
    return User;
}());
var user = new User("Nahid Hossain", 27);
user.display();
