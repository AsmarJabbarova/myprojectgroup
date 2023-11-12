let signUp = document.querySelector(".sign-up");
let myprofile = document.querySelector(".my-profile");
if (JSON.parse(localStorage.getItem("users"))) {
  signUp.classList.add("d-none");
  myprofile.classList.remove("d-none");
}
