let signUp = document.querySelector(".sign-up");
let myprofile = document.querySelector(".my-profile");
if (JSON.parse(localStorage.getItem("users"))) {
  signUp.classList.add("d-none");
  myprofile.classList.remove("d-none");
}

let product = [];
let fav = JSON.parse(localStorage.getItem("favo")) ?? [];
let myBasket = JSON.parse(localStorage.getItem("sebet")) ?? [];
let featuredWrap = document.querySelector(".featuredwrap");

axios("https://654e4ec3cbc325355742b77f.mockapi.io/products").then((res) => {
  res.data.forEach((data) => {
    product = res.data;
    // console.log(data);
    featuredWrap.innerHTML += `<div class="swiper-slide">
<div class="card">
  <div class="card-container">
    <div class="new"><p>New</p></div>
    <div   onclick="addFav(${data.id})" class="heart">
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
    <div class="add-to-card" name="${data.id}"
    ><button  onclick="addToCard(${
      data.id
    })">Add to card</button></div>
  </div>
</div>
</div>`;
  });
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,

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
let swiperWrapDiscount = document.querySelector(".discountwrap");

axios("https://654e4ec3cbc325355742b77f.mockapi.io/products").then((res) => {
  res.data.forEach((data) => {
    product = res.data;
    if (data.name == "Shoulder bag") {
      swiperWrapDiscount.innerHTML += `<div class="swiper-slide">
<div class="card">
  <div class="card-container">
    <div class="new"><p>New</p></div>
    <div  onclick="addFav(${data.id})"  class="heart">
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
    <div onclick="addToCard(${
      data.id
    })" class="add-to-card"><button>Add to card</button></div>
  </div>
</div>
</div>`;
    }
  });
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,

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
let bestsellerwrap = document.querySelector(".bestsellerwrap");

axios("https://654e4ec3cbc325355742b77f.mockapi.io/products").then((res) => {
  res.data.forEach((data) => {
    product = res.data;
    if (data.categorySecond == "Hand bag") {
      bestsellerwrap.innerHTML += `<div class="swiper-slide">
<div class="card">
  <div class="card-container">
    <div class="new"><p>New</p></div>
    <div  onclick="addFav(${data.id})"  class="heart">
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
    <div onclick="addToCard(${
      data.id
    })" class="add-to-card"><button>Add to card</button></div>
  </div>
</div>
</div>`;
    }
  });
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,

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

// let newProduct = {
//   name: "Shoulder bag",
//   categoryFirst: "Evening bag",
//   categorySecond: "Evening bag",
//   image: "./assets/images/blackbag.png",
//   price: 300,
//   discountPercent: 5,
//   comment: [],
//   rating: 5,
//   description: "Discover the perfect fusion of fashion and functionality",
//   sale: true,
//   color: "black",
//   sold: true,
//   createDate: new Date().toISOString(), // Use current date as an example
// };

// axios
//   .put("https://654e4ec3cbc325355742b77f.mockapi.io/products/5", newProduct)
//   .then((res) => {
//     console.log("Product updated successfully", res.data);
//   })
//   .catch((error) => {
//     console.error("Error updating product", error);
//   });

// axios("http://localhost:3000/meals").then((res) => {
//   res.data.forEach((data) => {
//     cardSide.innerHTML += `     <div class="card" style="width: 18rem">
//     <div style="width: 100%;height:300px; overflow:hidden"><img
//     src="${data.image}"
//     class="card-img-top"
//     alt="..." height="330px"
//   /></div>

// <div class="card-body">
//   <h5 class="card-title">${data.name}</h5>
//   <p class="card-text">
//     ${data.price}$
//   </p>
//   <a href="details.html?id=${data.id}"> <button class="detail btn btn-outline-primary">Detail</button></a>

//   <button class="trash btn btn-outline-danger">
//     <i class="fa-solid fa-trash"></i>
//   </button>
//   <button class="heart btn btn-outline-primary" name="${data.id}">
//   <i class="fa-solid basketBtn fa-basket-shopping" style="color: #397ef3;"></i>
//   </button>
//   <button class="heart btn favBasketBtn btn-outline-danger" name="${data.id}">
//   <i class="fa-regular fa-heart" ></i>
// </button>
// </div>
// </div>`;
//   });
//   let basketBtn = document.querySelectorAll(".basketBtn");
//   basketBtn.forEach((btn) => {
//     btn.parentElement.addEventListener("click", function () {
//       const mealId = this.getAttribute("name");
//       let basketArr = JSON.parse(localStorage.getItem("basket")) || [];

//       const existingMeal = basketArr.find((meal) => meal.id === mealId);
//       Swal.fire({
//         icon: "success",
//         text: "Meal added to basket!",
//         position: "bottom-right",
//         showConfirmButton: false,
//         timer: 1000,
//       });
//       if (existingMeal) {
//         existingMeal.quantity += 1;
//       } else {
//         basketArr.push({ id: mealId, quantity: 1 });
//       }
//       localStorage.setItem("basket", JSON.stringify(basketArr));

//       console.log(basketArr);
//     });
//   })})




// axios
//   .get("https://654e4ec3cbc325355742b77f.mockapi.io/products")
//   .then((res) => {
//     product = res.data;
//     console.log(product);
//     myProduct(product);
//   });

// let container = document.querySelector(".greenbags-container");
// function myProduct(product) {
//   console.log(product);
//   product.forEach((element) => {
//     container.innerHTML += ` <div class="card">
//         <div class="card-container">
//           <div class="discount-percent">
//             <p>${element.discountPercent}%</p>
//           </div>
//           <div class="heart"  onclick="addFav(${element.id})">
//             <img  src="./assets/images/heartred.png" alt="" />
//           </div>
//           <img class="bag" src="${element.image}" alt="" />
//           <div class="stars">
//             <img src="./assets/images/star.png" alt="" />
//             <img src="/assets/images/star.png" alt="" />
//             <img src="./assets/images/star.png" alt="" />
//             <img src="./assets/images/star.png" alt="" />
//             <img src="./assets/images/star.png" alt="" />
//           </div>
//           <p class="card-text">
//             ${element.description}
//           </p>
//           <div class="price">
//             <p class="price-current">$${
//               element.price - element.price * (element.discountPercent / 100)
//             }</p>
//             <p class="price-from">From $${element.price}</p>
//           </div>
//           <div class="add-to-card" onclick="addToCard(${
//             element.id
//           })"><button>Add to card</button></div>
//         </div>
//       </div>`;
//   });
// }

function addToCard(id) {
  console.log(id);
  let myProductt=product.find(x=>parseInt(x.id)==id)
  console.log("my product ",myProductt);
  if (myBasket.some((x) => parseInt(x.mehsul.id) == id)) {
    myBasket.forEach((x) => {
      if (parseInt(x.mehsul.id)== id) {
        x.count += 1;
        return;
      }
    });
  } else {
    let obj = {
      count: 1,
      mehsul: myProductt,
    };
    myBasket.push(obj);
  }
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your product added to basket",
    showConfirmButton: false,
    timer: 1500,
  });
  localStorage.setItem("sebet", JSON.stringify(myBasket));
}



function addFav(productId) {
  let myproduct = product.find((x) =>parseInt(x.id) == productId);

  if (fav.some((x) => parseInt(x.mehsul.id) == productId)) {
    //   alert("Already added Favourite!")

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Already added to favourite",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    let obj = {
      mehsul: myproduct,
      count: 1,
    };
    fav.push(obj);
  }
  localStorage.setItem("favo", JSON.stringify(fav));
}
