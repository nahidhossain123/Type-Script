const userForm = document.querySelector(".user-form") as HTMLFormElement;
const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;
const userDescription = document.querySelector(
  "#address"
) as HTMLTextAreaElement;

userForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const data = {
    userName: userName.value,
    userEmail: userEmail.value,
    userCountry: userCountry.value,
    desc: userDescription.value,
  };
  console.log("User Form Data", data);
});
