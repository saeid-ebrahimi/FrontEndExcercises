const backBtn = document.querySelector("#back")
const shoeTitle = document.querySelector(".desc h1")
const shoeDesc = document.querySelector(".desc p")
const shoeImage = document.querySelector(".image img")
const productsArray = [
    { id:1, title:"Sport Shoe", price:53, text:"best sport shoes from known brands, let's try something different", img:"images/1.png"},
    { id:2, title:"Women Shoe", price:81, text:"best women shoes from known brands, let's try something different", img:"images/2.png"},
    { id:3, title:"Men Shoe", price:70, text:"best men shoes from known brands, let's try something different", img:"images/3.png"}
]
const locationParams = new URLSearchParams(location.search)
const mainProductID = locationParams.get("id")
console.log(mainProductID)
const mainProduct = productsArray.find(function (product){
    return product.id === parseInt(mainProductID)
})
if(mainProduct){
    shoeTitle.innerHTML = mainProduct.title
    shoeDesc.innerText = mainProduct.text
    shoeImage.setAttribute("src",mainProduct.img)
}
else{
    window.history.back()
}

backBtn.addEventListener("click", function (){
    window.history.back()
})



// ✌ :))