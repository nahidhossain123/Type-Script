var userInfo;
var userInfo1;
var userInfo2;
userInfo = function () {
    console.log("This is a simple function");
};
userInfo();
userInfo1 = function (name) {
    console.log("This is a siple function that receieve a string parameter" + name);
};
userInfo1("Nahid Hossain");
userInfo2 = function (name, age) {
    return "this a simple funciton that receieves two parameter ".concat(name, " and ").concat(age, " and return a string");
};
console.log(userInfo2("Nahid Hossain", 27));
