//Object type

// let customers: object[];
// customers = [];

type customer = { name: String; age: Number };
let customers: customer[];
customers = [];

let customer1 = {
  name: "Nahid Hossain",
  age: 27,
};

customers.push(customer1);

let customer2 = {
  name: "Nikita Hossain",
  age: 27,
};

customers.push(customer2);

console.log("Student List:", customers);

type RequestType = "GET" | "POST";

let getRequest: RequestType;

getRequest = "GET";

function RequestHandler(requestType: RequestType) {
  console.log(requestType);
}

RequestHandler("POST");
