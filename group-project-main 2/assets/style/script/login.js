let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let continueButton = document.querySelector(".continue");
let registerForm = document.querySelector("form");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  axios("https://654e4ec3cbc325355742b77f.mockapi.io/users").then((res) => {
    res.data.forEach((data) => {
      let user = res.data.find(
        (userInfo) =>
          emailInput.value == userInfo.email &&
          passwordInput.value == userInfo.password
      );
      if (user) {
        localStorage.setItem(
          "users",
          JSON.stringify({ isLogged: true, usersId: user.id })
        );
        console.log("true");
        window.location.href = "http://127.0.0.1:5500/landingpage.html";
      } else {
        Swal.fire({
          icon: "error",
          text: "This account doesnt exist. Incorrect username or password",
          position: "bottom-right",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  });
});
