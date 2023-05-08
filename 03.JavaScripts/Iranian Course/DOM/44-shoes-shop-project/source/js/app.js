// DOM => Document Object Model
// BOM => Browser Object Model

const productContainer = document.querySelector(".container")
const productFragment = document.createDocumentFragment()
const productsArray = [
    { id:1, title:"Sport Shoe", price:53, text:"best sport shoes from known brands, let's try something different", img:"images/1.png"},
    { id:2, title:"Women Shoe", price:81, text:"best women shoes from known brands, let's try something different", img:"images/2.png"},
    { id:3, title:"Men Shoe", price:70, text:"best men shoes from known brands, let's try something different", img:"images/3.png"}
]

productsArray.forEach(function (product){
    const productCardElem = document.createElement("div")
    productCardElem.classList.add("product-card")
    productCardElem.insertAdjacentHTML("beforeend",
        `<h1>${product.title}</h1>
        <p>${product.text}</p>
        <div class="product-pic" style="background-image: url(${product.img});"></div>
        <div class="product-info">
          <div class="product-price">$${product.price}</div>
          <a href="product.html?id=${product.id}" class="product-button">See More</a>`)
    productFragment.appendChild(productCardElem)
})

productContainer.appendChild(productFragment)