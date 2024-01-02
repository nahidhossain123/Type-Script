//enum --unique values and constant values
//enum types--numeric,string, hetergenous

//numeric enum:

enum RequestType {
  GetData,
  ReadData,
  DeleteData,
  SaveData,
}

console.log("Numeric Enum Value", RequestType);

//String Enum:

enum UserType {
  user = "USER",
  customer = "CUSTOMER",
  member = "MEMBER",
  admin = "ADMIN",
}

console.log("String Enum Values", UserType);
console.log("User Type User", UserType.user);
console.log("User Type User", UserType["user"]);
