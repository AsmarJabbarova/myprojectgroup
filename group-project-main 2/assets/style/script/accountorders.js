let signUp = document.querySelector(".sign-up");
let myprofile = document.querySelector(".my-profile");
let head = document.querySelector(".head");
if (JSON.parse(localStorage.getItem("users"))) {
  signUp.classList.add("d-none");
  myprofile.classList.remove("d-none");
}
let users = JSON.parse(localStorage.getItem("users")) || [];
let userId = users.usersId;
let tbody = document.querySelector("tbody");
axios(`https://654e4ec3cbc325355742b77f.mockapi.io/users/${userId}`).then(
  (res) => {
    console.log(res.data.orders);
    res.data.orders.forEach((element) => {
      console.log(element);
      tbody.innerHTML += `<tr>
<td>${Math.floor(Math.random() * 1000000)}</td>
<td>${element.mehsul.name}</td>
<td>${element.mehsul.price}</td>
<td>${new Date()}</td>
<td>${element.count}</td>
<td>...</td>
</tr>`;
    });
  }
);
axios(`https://654e4ec3cbc325355742b77f.mockapi.io/users/${userId}`).then(
  (res) => {
    console.log(res.data);
    head.innerHTML = ` <div class="img">
    <img src="./assets/images/Ellipse 33.png" alt="" />
  </div>

  <div class="about">
    <h4>${res.data.name}</h4>
    <p>${res.data.email}</p>
  </div>`;
  }
);
