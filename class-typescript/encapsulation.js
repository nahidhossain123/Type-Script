var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Encapsulation is a way to restrict the direct access to some components of an object, so users cannot access state values for all of the variables of a particular object.
//access modifiers: public, private, protected, readonly
// public: can be accesable from anywhere
// private: only accessable within the calss
// restricted: only accessable within the callas and from subclass or childclass
// readonly: can not be modified.
var UserDetails = /** @class */ (function () {
    function UserDetails(name, age) {
        this.name = name;
        this.age = age;
    }
    UserDetails.prototype.display = function () {
        console.log("My name is ".concat(this.age, " and my age is ").concat(this.age));
    };
    return UserDetails;
}());
var userObj = new UserDetails("Nahid Hossain", 27);
//userObj.name = "Imran Hossian"; //can not access protected member
//userObj.display(); //can not access protected method
var StudentDetails = /** @class */ (function (_super) {
    __extends(StudentDetails, _super);
    function StudentDetails(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    StudentDetails.prototype.display = function () {
        console.log("My name is ".concat(this.age, " and my age is ").concat(this.age, " and ID is ").concat(this.studentId));
    };
    StudentDetails.prototype.setStudent = function (id) {
        this.studentId = id;
    };
    StudentDetails.prototype.getStudent = function () {
        return this.studentId;
    };
    return StudentDetails;
}(UserDetails));
var studentObj = new StudentDetails("Nikki hasan", 27, 2016260136);
// studentObj.display();
studentObj.setStudent(2016260136);
console.log("Student Id is:", studentObj.getStudent());
