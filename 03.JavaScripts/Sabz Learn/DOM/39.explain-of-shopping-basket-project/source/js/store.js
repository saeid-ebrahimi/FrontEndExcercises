const allProducts = [
    {id:1, title:"Album 1", price: 12.93, img:"./Images/Album 1.png"},
    {id:2, title:"Album 2", price:22.93, img: "./Images/Album 2.png"},
    {id:3, title:"Album 3", price:32.93, img: "./Images/Album 3.png"},
    {id:4, title:"Album 4", price:42.93, img: "./Images/Album 4.png"},
    {id:5, title:"Coffee",  price:98, img:"./Images/Cofee.png"},
    {id:6, title:"Shirt", price:65.33 ,img:"./Images/Shirt.png"}
]
let $ = document
allProducts.forEach(function(product){
   const productContainer = $.createElement("div") 
   productContainer.classList.add("shop-item")

    let productTitleSpan = $.createElement("span")
    
})


