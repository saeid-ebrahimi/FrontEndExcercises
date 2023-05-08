const allProducts = [
    {id:1, title:"Album 1", price: 12.93, img:"./Images/Album1.png", count:1 , available:10},
    {id:2, title:"Album 2", price:22.93, img: "./Images/Album2.png", count:1 , available:10},
    {id:3, title:"Album 3", price:32.93, img: "./Images/Album3.png", count:1 , available:10},
    {id:4, title:"Album 4", price:42.93, img: "./Images/Album4.png", count:1 , available:10},
    {id:5, title:"Coffee",  price:98, img:"./Images/Coffee.png", count:1 , available:10},
    {id:6, title:"Shirt", price:65.33 ,img:"./Images/Shirt.png", count:1 , available:10}
]
let userBasket = []
let $ = document
const shopItemsContainer = $.querySelector(".shop-items")
const basketProductsContainer = $.querySelector(".cart-items")
const purchaseBtn = $.querySelector("#purchase")
const totalPriceElem = $.querySelector(".cart-total-price")
allProducts.forEach(function(product){

    shopItemsContainer.insertAdjacentHTML("beforeend",
        `<div class="shop-item">
          <span class="shop-item-title">${product.title}</span>
          <img class="shop-item-image" src='${product.img}' alt=""/>
          <div class="shop-item-details">
            <span class="shop-item-price">${product.price}</span>
            <button class="btn btn-primary shop-item-button" onclick=addProductToBasketArray(${product.id}) type="button">
              ADD TO CART
            </button>
          </div>`
    )

})
function addProductToBasketArray(productID){
    const productItem = allProducts.find(function (product){
        return product.id === productID
    })
    const prevItem = userBasket.findIndex(function (product){
        return productID === product.id
    })
    if (prevItem !== -1){
        userBasket[prevItem].count += 1
        updateProductCount(productID, userBasket[prevItem].count)
    }
    else{
        userBasket.push(productItem)
    }
    console.log(userBasket)
    basketProductsGenerator(userBasket)
    calculateTotalPrice(userBasket)
}
function basketProductsGenerator(userBasketArray){
    basketProductsContainer.innerHTML = ""
    userBasketArray.forEach(function (basketItem){

        basketProductsContainer.insertAdjacentHTML("beforeend",
            `<div class="cart-row">
                <div class="cart-item cart-column">
                    <img src=${basketItem.img} class="cart-item-image" width="100px" height="100px">
                    <span class="cart-item-title">${basketItem.title}</span>
                </div>
                <span class="cart-price cart-column">$${basketItem.price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" value="${basketItem.count}" onchange=updateProductCount(${basketItem.id}, event.target.value) type="number" min="1" max="${basketItem.available}">
                    <button class="btn btn-danger" onclick=removeProductFromBasket(${basketItem.id}) type="button">REMOVE</button>
                </div>
            </div>`)

    })
}

function removeProductFromBasket(productID){
    userBasket = userBasket.filter(function (product){
        if (product.id === productID)
            product.count = 1
        return product.id !== productID
    })
    console.log(userBasket)
    basketProductsGenerator(userBasket)
    calculateTotalPrice(userBasket)
}

purchaseBtn.addEventListener("click", function (){
    let paymentAns = confirm("Do you want to redirect to payment page?")
    if (paymentAns){
        userBasket = []
        basketProductsGenerator(userBasket)
    }

})
function calculateTotalPrice(userBasket){
    let total = 0
    userBasket.forEach(function(product){
        total += product.price * product.count
    })
    totalPriceElem.innerText = "$"+total.toPrecision(4)
}
function updateProductCount(productID, currentCountValue){
    userBasket.forEach(function (product){
        if(product.id === productID){
            product.count = parseInt(currentCountValue)
        }
    })
    calculateTotalPrice(userBasket)
}