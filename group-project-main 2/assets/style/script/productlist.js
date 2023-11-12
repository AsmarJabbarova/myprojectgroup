let signUp = document.querySelector(".sign-up");
let myprofile = document.querySelector(".my-profile");
if (JSON.parse(localStorage.getItem("users"))) {
  signUp.classList.add("d-none");
  myprofile.classList.remove("d-none");
}
let product =[]
let myBasket =JSON.parse(localStorage.getItem('sebet'))?? []


axios.get("https://654e4ec3cbc325355742b77f.mockapi.io/products").then((res) => {
  product = res.data;
  console.log(product);
  myProduct(product)
});

let container=document.querySelector(".greenbags-container")
function myProduct(product) {
  

    console.log(product);
    product.forEach(element => {
        container.innerHTML+=` <div class="card">
        <div class="card-container">
          <div class="discount-percent">
            <p>${element.discountPercent}%</p>
          </div>
          <div class="heart">
            <img src="./assets/images/heartred.png" alt="" />
          </div>
          <img class="bag" src="${element.image}" alt="" />
          <div class="stars">
            <img src="./assets/images/star.png" alt="" />
            <img src="/assets/images/star.png" alt="" />
            <img src="./assets/images/star.png" alt="" />
            <img src="./assets/images/star.png" alt="" />
            <img src="./assets/images/star.png" alt="" />
          </div>
          <p class="card-text">
            ${element.description}
          </p>
          <div class="price">
            <p class="price-current">$${element.price-(element.price*(element.discountPercent/100))}</p>
            <p class="price-from">From $${element.price}</p>
          </div>
          <div class="add-to-card" onclick="addToCard(${element.id})"><button>Add to card</button></div>
        </div>
      </div>`
    });
    
}

function addToCard(id) {
    
    let myProductt=product.find(x=>parseInt(x.id)==id)
    console.log(myProductt);
    console.log(id);
    if(myBasket.some(x=>parseInt(x.mehsul.id)==id)){
        myBasket.forEach(x=>{
            if(parseInt(x.mehsul.id)==id){
                x.count+=1
                return
            }
        }
        )
    }
    else{
        let obj={
            count:1,
            mehsul:myProductt
        }
        myBasket.push(obj)
    }
    localStorage.setItem("sebet",JSON.stringify(myBasket))
}

function getProductById(Id) {
  return product.find((x) =>parseInt(x.id) === Id);
}

function addFav(productId) {
  let myproduct = product.find((x) =>parseInt(x.id) == productId);

  if (fav.some((x) => parseInt(x.mehsul.id) == productId)) {
    //   alert("Already added Favourite!")

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your product added to favourite",
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
