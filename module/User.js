"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.displayInfo = function () {
        console.log("User Name is ".concat(this.name, " and age is ").concat(this.age));
    };
    return User;
}());
exports.User = User;
