const productDetailsCont = document.querySelector('.pro')
productDetailsCont.addEventListener('click',()=>{
    const productDetailsSection = document.querySelector('.section-p1')
console.log('product cart cclicked')
    productDetailsSection.innerHTML = ` <div class="single-pro-image">
    <img src="../img/products/f1.jpg" width="100%" id="MainImg" alt=""> 
    <div class="small-img-group">
     <div class="small-img-col">
         <img src="../img/products/f1.jpg" width="100%" class="small-img" alt="">
     </div>
     <div class="small-img-col">
         <img src="../img/products/f2.jpg" width="100%" class="small-img" alt="">
     </div>
     <div class="small-img-col">
         <img src="../img/products/f3.jpg" width="100%" class="small-img" alt="">
     </div>
     <div class="small-img-col">
         <img src="../img/products/f4.jpg" width="100%" class="small-img" alt="">
     </div>
    </div>
  </div>
  <div class="single-pro-details">
  <h5>Home / T-Shirt</h5>
  <h4>Men's Fashion T Shirt</h4>
  <h2>Rs.1139.00</h2>
  <select>
      <option>Select Size</option>
      <option>XL</option>
      <option>XXL</option>
      <option>Small</option>
      <option>Large</option>
  </select>
  <input type="number" value="1">
  <button class="normal">Add To Cart</button>
  <h4>Product Details</h4>
  <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 per sq.yd fabric constructed form 100% cotton, this classic fit preshrunk jeesey knit provides unmatched comfort with each wear Featuring a taped neck and shoulder and a seamless double-needle collar and avalible in a range of colors,it offers it all in the ultimate head-turing package.</span>
</div>`
})

