let firstnameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let continueButton = document.querySelector(".continue");
let registerForm = document.querySelector("form");
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("click");
  axios.get(`https://654e4ec3cbc325355742b77f.mockapi.io/users`).then((res) => {
    {
      axios
        .post("https://654e4ec3cbc325355742b77f.mockapi.io/users", {
          name: firstnameInput.value,
          email: emailInput.value,
          password: passwordInput.value,
        })
        .then(() => {
          window.location.href = "http://127.0.0.1:5500/login.html";
          firstnameInput.value = "";
          emailInput.value = "";
          passwordInput.value = "";
        });
    }
  });
});
