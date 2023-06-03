const featuredProduct = [
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/f1.jpg?alt=media&token=358b570d-4cb9-4ccc-bc39-e8609c685b32",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/f2.jpg?alt=media&token=f59b52ce-fb63-41f3-af02-92e50bfa7e29",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/f4.jpg?alt=media&token=65c6150b-b067-4111-a6e7-00e0c1aa4ca2",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/f4.jpg?alt=media&token=65c6150b-b067-4111-a6e7-00e0c1aa4ca2",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/f5.jpg?alt=media&token=5975c9fa-5d95-46fd-8e4d-e076f31953fc",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/f6.jpg?alt=media&token=0578713c-0526-4f76-838b-023f654d13ce",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/f7.jpg?alt=media&token=891ec29b-ebf8-4beb-bed0-a84f89c42167",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/f8.jpg?alt=media&token=1a866e5b-84b1-4698-ac1f-52a49f1b98b7",
  },
];

const newArrivalsProducts = [
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/n1.jpg?alt=media&token=08e46f36-963b-4b81-95c8-1b1fe2fdce82",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/n2.jpg?alt=media&token=ba14d4fd-98b9-45cc-a16e-3d02d8ba030b",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/n3.jpg?alt=media&token=fb8cd513-6d58-4077-9474-2a5aaadc24e6",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/n4.jpg?alt=media&token=e6c4bd71-293c-4da5-b0b6-1162c905c9fc",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/n5.jpg?alt=media&token=2b3811f7-a2d3-4d3b-8c38-b7cd96b1706b",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/n8.jpg?alt=media&token=0cb89e3f-d5f4-4bc7-b3c7-4ab7ea2de722",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/n6.jpg?alt=media&token=b6157ea5-0684-4416-a3c1-23f6fd63ca63",
  },
  {
    product_name: "Cartoon Astronaut T-Shirt",
    product_brand: "addidas",
    product_price: 599,
    product_link:
      "https://firebasestorage.googleapis.com/v0/b/cara-final-year-project.appspot.com/o/n7.jpg?alt=media&token=00746d0e-315f-4a06-a900-8c98492e8062",
  },
];

// Show Modal
// console.log(featuredProduct.product_link)
function showModal() {
  document.querySelector(".overlay").classList.add("show-overlay");
  document.querySelector(".logincont").classList.add("show-loginform");
}

function closeModal() {
  document.querySelector(".overlay").classList.remove("show-overlay");
  document.querySelector(".logincont").classList.remove("show-loginform");
}

const signUpName = document.querySelector(".signUpName");
const submitBtn = document.getElementById("submit_btn");
const existingBtn = document.getElementById("existing_user");
const signUp = document.getElementById("sign_up");
const signText = document.getElementById("sign_text");
const signPara = document.getElementById("sign_para");

signUp.addEventListener("click", () => {
  signUpName.classList.add("dblock");
  signUpName.classList.remove("dnone");

  existingBtn.classList.add("existing_user");
  submitBtn.innerHTML = "Sign Up";
  existingBtn.innerHTML = "Existing User? Log in";
  signText.innerHTML = `Looks like you're new here!`;
  signPara.innerHTML = "Sign up with your mobile number to get started";
  signUp.innerHTML = "";
});
existingBtn.addEventListener("click", () => {
  //   submitBtn.innerHTML = "Request OTP";
  existingBtn.classList.remove("existing_user");
  existingBtn.innerHTML = "";
  signText.innerHTML = `<h2 id="sign_text"><img src="../img/logo.png" class="logo" alt=""> Login</h2>`;
  submitBtn.innerHTML = "LogIn";
  signUpName.classList.add("dnone");
  signUpName.classList.remove("dblock");
  signPara.innerHTML =
    "Get access to your Orders, Wishlist and Recommendations";
  signUp.innerHTML = "New to Cara? Create an account";
});

//onclick to change login to my account
const cartItm = document.querySelector(".cart_itm");
const logInBtn = document.querySelector("#sign_text");

// cartItm.addEventListener("click", () => {
//   logInBtn.innerHTML = "My Account";
// });

function caraProduct() {
  const mainContainer = document.querySelector(".pro-container");
  const secondMainContainer = document.querySelector(".newArrivals");

  featuredProduct.map((items, i) => {
    mainContainer.innerHTML += `<div class="pro">
        <img src="${items.product_link}" alt="">
        <div class="des">
        <span>${items.product_brand}</span> 
        <h5>${items.product_name}</h5> 
        <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        </div>
        <h4>${items.product_price}</h4>
        </div>
        <button id="addCartBtn" onclick="mainAddToCartFeaturedProduct(${i} )"><i style="cursor:pointer" class="fa fa-cart-plus cart"></i></button>
        </div>`;
  });
  newArrivalsProducts.map((items, i) => {
    secondMainContainer.innerHTML += `
        <div class="pro">
        <img src="${items.product_link}" alt="image">
        <div class="des">
        <span>${items.product_brand}</span> 
        <h5>${items.product_name}</h5> 
        <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        </div>
        <h4>${items.product_price}</h4>
        </div>
        <button id="addCartBtn"  onclick="addToCartNewArrivals(${i})"><i class="fa fa-cart-plus cart"></i></button>.
        </div>`;
  });
}

caraProduct();
// const addToCartBtn = document.querySelectorAll('#addCartBtn')

function setLocalStorage() {
  var status = window.localStorage.getItem("status")
  if( status == "" || status == undefined){
    window.localStorage.setItem("status", "KNiEvDwUuPomRHTOyzYLjVxcXQabSf"); // setting the status to not logged in
  }
  var cartItems = JSON.parse(window.localStorage.getItem("products"));
  cartLength();
  if (cartItems === null) {
    window.localStorage.setItem("products", JSON.stringify([]));
  }
}
setLocalStorage();

function mainAddToCartFeaturedProduct(index) {
  var status = localStorage.getItem("status");
  if (status === "KNiEvDwUuPomRHTOyzYLjVxcXQabSf") {
    alert("Kindly log in to add this item in your cart");
    return;
  }
  // console.log('cart main clicked')
  var cart = JSON.parse(window.localStorage.getItem("products"));
  cart.push(featuredProduct[index]);
  window.localStorage.setItem("products", JSON.stringify(cart));
  cartLength();
}
function addToCartNewArrivals(index) {
  var status = localStorage.getItem("status");
  if (status === "KNiEvDwUuPomRHTOyzYLjVxcXQabSf") {
    alert("Kindly log in to add this item in your cart");
    return;
  }
  var cart = JSON.parse(window.localStorage.getItem("products"));
  cart.push(featuredProduct[index]);
  window.localStorage.setItem("products", JSON.stringify(cart));
  // console.log('new arrivals clicked')
  cartLength();
}
function cartLength() {
  var cartItems = JSON.parse(window.localStorage.getItem("products"));
  if (cartItems.length > 0) {
    document.querySelector(".cart-length").innerText = cartItems.length;
  }
}

async function handleLogIn() {
  var email = document.querySelector(".logInEmail").value;
  var password = document.querySelector(".logInPassword").value;
  console.log(email, password);
  if (email == "" || password == "") {
    alert("Please fill all the fields");
    return;
  }

  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      if (data.status == 404) {
        alert(data.error);
        return;
      }
      window.localStorage.setItem("status", "htbFJQxIjXqfyzOVWskDCpRBuGeYrn");
      closeModal();
      location.reload();
    })
    .catch((error) => {
      // Handle any errors
      alert("Internal Server error please try again");
    });
}
