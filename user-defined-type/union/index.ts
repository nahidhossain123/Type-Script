//user defined type: union

let id: string | number;

id = "101";

function displayUser(userId: string | number) {
  console.log("My User ID:", id);
}

displayUser("101");
