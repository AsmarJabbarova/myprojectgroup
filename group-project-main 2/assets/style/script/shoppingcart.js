let signUp = document.querySelector(".sign-up");
let myprofile = document.querySelector(".my-profile");
if (JSON.parse(localStorage.getItem("users"))) {
  signUp.classList.add("d-none");
  myprofile.classList.remove("d-none");
}
let users = JSON.parse(localStorage.getItem("users")) || [];
let myBasket = JSON.parse(localStorage.getItem("sebet")) ?? [];

let sum = 0;
function Updatebasket() {
  let products = document.querySelector(".sol");
  products.innerHTML = "";
  let sag = document.querySelector(".sag");
  sag.innerHTML = "";
  myBasket.forEach((element) => {
    myData(element);
    sum +=
      element.mehsul.price -
      element.mehsul.price *
        (element.mehsul.discountPercent / 100) *
        element.count;
  });
  sum = parseFloat(sum.toFixed(2));
  sag.innerHTML += ` <div class="order">
    <div class="subtotal">
      <div>Your subtotal</div>
      <div class="asum">US $${sum}</div>
    </div>
    <div class="shipping">
      <div>Shipping changes</div>
      <div>Free</div>
    </div>
    <div class="total">
      <div>Total</div>
      <div class="asum">US $${sum}</div>
    </div>

    <div class="promocode">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Discount prome code"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary apply" type="button">
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="confirm">
    <button type="button" class="btn btn-danger">Confirm cart</button>
  </div>
  <div class="nagd">
    <button type="button" class="btn btn-light">Cash payment</button>
  </div>
    `;
  let confirmCart = document.querySelector(".confirm");
  confirmCart.addEventListener("click", function (e) {
    e.preventDefault();
    if (!JSON.parse(localStorage.getItem("users"))) {
      window.location.href = "http://127.0.0.1:5500/login.html";
    } else {
      let userId = users.usersId;
      console.log(users.usersId);
      let basket = JSON.parse(localStorage.getItem("sebet")) || [];

      axios.put(`https://654e4ec3cbc325355742b77f.mockapi.io/users/${userId}`, {
        orders: basket,
      });

      localStorage.removeItem("sebet");
      products.innerHTML = "";
      sag.innerHTML = ` <div class="order">
      <div class="subtotal">
        <div>Your subtotal</div>
        <div class="asum">US $0</div>
      </div>
      <div class="shipping">
        <div>Shipping changes</div>
        <div>Free</div>
      </div>
      <div class="total">
        <div>Total</div>
        <div class="asum">US $0</div>
      </div>
  
      <div class="promocode">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Discount prome code"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary apply" type="button">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="confirm">
      <button type="button" class="btn btn-danger">Confirm cart</button>
    </div>
    <div class="nagd">
      <button type="button" class="btn btn-light">Cash payment</button>
    </div>
      `;
    }
  });
}
Updatebasket();

function myData(myBasket) {
  let products = document.querySelector(".sol");
  products.innerHTML += ` 
     <div class="mehsul-card">
    <div class="sekil">
      <img src="${myBasket.mehsul.image}" alt="" />
    </div>
    <div class="melumatlar">
      <div class="ititle">
        <div class="adi">${myBasket.mehsul.name}</div>
        <div class="qiymet">US $${
          myBasket.mehsul.price -
          myBasket.mehsul.price * (myBasket.mehsul.discountPercent / 100)
        }</div>
      </div>
      <div class="detallar">
        <div>Size:XS Color:${myBasket.mehsul.color}</div>
        <div>Delivery:20-26 Days</div>
        <div>Quality</div>
     
        <select name="cars" id="cars">
          <option value="volvo">2-9</option>
          <option value="saab">50</option>
          <option value="opel">10-49</option>
          <option value="audi">2-9</option>
        </select>
      </div>
      <div class="secim">
        <div>
          <img src="./assets/images/heartblack.png" alt="" />Favourite
        </div>
        <div onclick="DeleteProduct(${myBasket.mehsul.id})">
          <img src="./assets/images/trash 1.png" alt="" />Remove
        </div>
      </div>
    </div>
  </div>`;
}
function DeleteProduct(productId) {
  myBasket = myBasket.filter((x) => parseInt(x.mehsul.id) !== productId);
  localStorage.setItem("sebet", JSON.stringify(myBasket));
  sum = 0;
  Updatebasket();
  console.log(myBasket);
}
