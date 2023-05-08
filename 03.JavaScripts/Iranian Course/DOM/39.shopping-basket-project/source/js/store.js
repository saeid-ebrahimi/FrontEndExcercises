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
    const productContainer = $.createElement("div")
    productContainer.classList.add("shop-item")

    const productTitleSpan = $.createElement("span")
    productTitleSpan.innerText = product.title
    productTitleSpan.classList.add("shop-item-title")

    const productImageElem = $.createElement("img")
    productImageElem.setAttribute("src", product.img)
    productImageElem.classList.add("shop-item-image")

    const productDetailContainer = $.createElement("div")
    productDetailContainer.classList.add("shop-item-details")

    const productPriceSpan = $.createElement("span")
    productPriceSpan.classList.add("shop-item-price")
    productPriceSpan.innerText = product.price

    const productAddBtn = $.createElement("button")
    productAddBtn.innerText = "ADD TO CART"
    productAddBtn.className = "btn btn-primary shop-item-button"
    productAddBtn.addEventListener("click", function (){
        addProductToBasketArray(product.id)
    })
    productDetailContainer.append(productPriceSpan,productAddBtn)

    productContainer.append(productTitleSpan, productImageElem, productDetailContainer)
    shopItemsContainer.appendChild(productContainer)
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
        const basketProductContainer = $.createElement("div")
        basketProductContainer.classList.add("cart-row")

        const basketProductDetailContainer = $.createElement("div")
        basketProductDetailContainer.className = "cart-item cart-column"

        const basketProductImg = $.createElement("img")
        basketProductImg.setAttribute("src", basketItem.img)
        basketProductImg.setAttribute("width", "100px")
        basketProductImg.setAttribute("height", "100px")
        basketProductImg.classList.add("cart-item-image")

        const basketProductTitleSpan = $.createElement("span")
        basketProductTitleSpan.classList.add("cart-item-title")
        basketProductTitleSpan.innerText = basketItem.title

        basketProductDetailContainer.append(basketProductImg, basketProductTitleSpan)

        const basketProductPriceSpan = $.createElement("span")
        basketProductPriceSpan.innerText = basketItem.price
        basketProductPriceSpan.className = "cart-price cart-column"

        const basketProductInputsContainer = $.createElement("div")
        basketProductInputsContainer.className = "cart-quantity cart-column"

        const basketProductInput = $.createElement("input")
        basketProductInput.classList.add("cart-quantity-input")
        basketProductInput.type = "number"
        basketProductInput.min = "1"
        basketProductInput.max = basketItem.available
        basketProductInput.value = basketItem.count
        basketProductInput.addEventListener("change", function (){
            updateProductCount(basketItem.id, basketProductInput.value)
        })

        const basketProductRemoveBtn = $.createElement("button")
        basketProductRemoveBtn.className = "btn btn-danger"
        basketProductRemoveBtn.type = "button"
        basketProductRemoveBtn.innerText = "REMOVE"
        basketProductRemoveBtn.addEventListener("click", function (){
            removeProductFromBasket(basketItem.id)
        })

        basketProductInputsContainer.append(basketProductInput, basketProductRemoveBtn)
        basketProductContainer.append(basketProductDetailContainer,basketProductPriceSpan, basketProductInputsContainer)

        basketProductsContainer.appendChild(basketProductContainer)
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
            product.count = currentCountValue
        }
    })
    calculateTotalPrice(userBasket)
}