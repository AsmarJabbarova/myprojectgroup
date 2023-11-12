let signUp = document.querySelector(".sign-up");
let myprofile = document.querySelector(".my-profile");
if (JSON.parse(localStorage.getItem("users"))) {
  signUp.classList.add("d-none");
  myprofile.classList.remove("d-none");
}
let description = document.querySelector(".description");
let lorem = document.querySelector(".lorem");

let reviews = document.querySelector(".reviews");

let rev_comment = document.querySelector(".rev-comment");

description.addEventListener("click", function () {
  lorem.style.display = "flex";
  rev_comment.style.display = "none";
});

reviews.addEventListener("click", function () {
  lorem.style.display = "none";
  rev_comment.style.display = "flex";
});

let swipperWrap = document.querySelector(".swiper-wrapper");

axios("https://654e4ec3cbc325355742b77f.mockapi.io/products").then((res) => {
  res.data.forEach((data) => {
    console.log(data);
    if (data.categorySecond == "Shoulder bag") {
      swipperWrap.innerHTML += `<div class="swiper-slide">
<div class="card">
  <div class="card-container">
   
    <div class="heart">
      <img src="./assets/images/heartred.png" alt="" />
    </div>
    <img class="bag" src="${data.image}" alt="" />
    <div class="stars">
      <img src="./assets/images/star.png" alt="" />
      <img src="/assets/images/star.png" alt="" />
      <img src="./assets/images/star.png" alt="" />
      <img src="./assets/images/star.png" alt="" />
      <img src="./assets/images/star.png" alt="" />
    </div>
    <p class="card-text">
      ${data.description}
    </p>
    <div class="price">
      <p class="price-current">${
        data.price - (data.price * data.discountPercent) / 100
      }$</p>
      <p class="price-from">From ${data.price}$</p>
    </div>
    <div class="add-to-card"><button>Add to card</button></div>
  </div>
</div>
</div>`;
    }
  });
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
  });
});
