let signUp = document.querySelector(".sign-up");
let myprofile = document.querySelector(".my-profile");
if (JSON.parse(localStorage.getItem("users"))) {
  signUp.classList.add("d-none");
  myprofile.classList.remove("d-none");
}
let myFav = JSON.parse(localStorage.getItem("favo")) ?? [];

// let myFav = JSON.parse(localStorage.getItem("favo")) || [];

function UpdateFav() {
  let products = document.querySelector(".siya");
  products.innerHTML = "";
  myFav.forEach((element) => {
    myData(element);
  });
}
UpdateFav();

function myData(myBasket) {
  let products = document.querySelector(".siya");

  // let imgSource = myBasket.mehsul.imgLink || myBasket.mehsul.image

  products.innerHTML += `
<div class="card">

<img   src="./assets/images/close.png" alt="" class="bagla" onclick="DeleteProduct(${
    myBasket.mehsul.id
  })" />

<div class="card-container">
  <div class="button-new" >
    <button>New</button>
  </div>

  <img class="bag" src="${myBasket.mehsul.image}" alt="" />
  <div class="stars">
 
    <img src="./assets/images/star.png" alt="" />
    <img src="/assets/images/star.png" alt="" />
    <img src="./assets/images/star.png" alt="" />
    <img src="./assets/images/star.png" alt="" />
    <img src="./assets/images/star.png" alt="" />
  </div>
  <p class="card-text">
    Shoulder Bag Leather Bag Leather undertakes laborious physical
    physical
  </p>
  <div class="price">
    <p class="price-current">$${
      myBasket.mehsul.price -
      myBasket.mehsul.price * (myBasket.mehsul.discountPercent / 100)
    }</p>
    <p class="price-from">From $${myBasket.mehsul.price}}</p>
  </div>
  <div class="add-to-card" onclick="addToCard(${
    myBasket.mehsul.id
  })"><button>Add to card</button></div>
</div>

</div>

`;
}

function DeleteProduct(productId) {
  console.log(productId);
  myFav = myFav.filter((x) => parseInt(x.mehsul.id) !== productId);

  localStorage.setItem("favo", JSON.stringify(myFav));
  UpdateFav();
}

// function Remove() {
//   myFav=[]
//     localStorage.removeItem('favo');
//     UpdateFav()

// }

function addToCard(id) {
  let myProduct = product.find((x) => x.id == id);
  if (myBasket.some((x) => x.mehsul.id == id)) {
    myBasket.forEach((x) => {
      if (x.mehsul.id == id) {
        x.count += 1;
        return;
      }
    });
  } else {
    let obj = {
      count: 1,
      mehsul: myProduct,
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
