var cartContainer = document.getElementById('cart_tbody')

function addToCartFeaturedProduct(){
    var cart = JSON.parse(window.localStorage.getItem("products"))
    cart.map((item,index)=>{
        cartContainer.innerHTML +=`  <tr>
        <td><i class="far fa-times-circle" onclick="removeItem(${index})"></i></td>
        <td><img src="${item.product_link}" alt=""></td>
        <td>${item.product_name}</td>
        <td class="productPrice">${item.product_price}</td>
        <td><input type="num
            " value="1"></td>
    </tr>`
    })
    calculateTotalPrice(cart)

} 

addToCartFeaturedProduct()

function removeItem(index){
    var cart = JSON.parse(window.localStorage.getItem("products"))    
    if(index!==-1){
        cart.splice(index,1)
    } 
    console.log(cart)
    window.localStorage.setItem("products",JSON.stringify(cart))
    console.log('remove btn')
    updateCart() 
    calculateTotalPrice(cart)
}

 function updateCart(){
    var cart = JSON.parse(window.localStorage.getItem("products"))
    cartContainer.innerHTML=""
    cart.map((item,index)=>{
        cartContainer.innerHTML +=`  <tr>
        <td><i class="far fa-times-circle" onclick="removeItem(${index})"></i></td>
        <td><img src="${item.product_link}" alt=""></td>
        <td>${item.product_name}</td>
        <td>${item.product_price}</td>
        <td><input type="num
            " value="1"></td>
    </tr>`
    })
 }

 //Total amount of products
 function calculateTotalPrice(cart) {
     let totalPrice = 0
     var cart = JSON.parse(window.localStorage.getItem("products"))
     for(i=0;i<cart.length;i++){
         totalPrice +=cart[i].product_price
         console.log(totalPrice)
        }   
     document.querySelector('.subTotalPrice').innerHTML =`${totalPrice}`
     document.querySelector('.totalPrice').innerHTML=`${totalPrice}`
    }
    calculateTotalPrice(cart)

//   let total = calculateTotalPrice(cart);
// console.log("Total price:", total);