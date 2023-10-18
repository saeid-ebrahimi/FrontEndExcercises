function Cart(){
    this.store = "Granny's Grocery";
    this.items = [];
    this.total = function (){
        return this.items.reduce((a, item) => ( a += item.price),0)
    }
}
const cart = new Cart();
cart.items.push({name: "head of lettuce", price: 3})
console.log(cart)
console.log(cart.total())

Cart.prototype.empty = function (){ this.items = []}
console.log(cart.empty())
console.log(cart)


const cart2 = Cart()  // it won't call constructor
console.log(cart2)
