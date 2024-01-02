//enum --unique values and constant values
//enum types--numeric,string, hetergenous
//numeric enum:
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GetData"] = 0] = "GetData";
    RequestType[RequestType["ReadData"] = 1] = "ReadData";
    RequestType[RequestType["DeleteData"] = 2] = "DeleteData";
    RequestType[RequestType["SaveData"] = 3] = "SaveData";
})(RequestType || (RequestType = {}));
console.log("Numeric Enum Value", RequestType);
//String Enum:
var UserType;
(function (UserType) {
    UserType["user"] = "USER";
    UserType["customer"] = "CUSTOMER";
    UserType["member"] = "MEMBER";
    UserType["admin"] = "ADMIN";
})(UserType || (UserType = {}));
console.log("String Enum Values", UserType);
console.log("User Type User", UserType.user);
console.log("User Type User", UserType["user"]);
