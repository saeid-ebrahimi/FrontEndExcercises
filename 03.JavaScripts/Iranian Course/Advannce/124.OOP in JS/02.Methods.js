const cart = {
    customer: "Jane",
    subtotal: function (){
        console.log("Subtotal called for "+ this.customer);
        return 0;}
}
console.log(cart)
console.log(cart.subtotal())

const cart2 = {
    customer: "Judy",
    subtotal: cart.subtotal
}
console.log(cart2)
console.log(cart2.subtotal())

let subtotalAlone = cart.subtotal

console.log(cart.subtotal === cart2.subtotal)
console.log(cart.subtotal === subtotalAlone)
console.log(subtotalAlone())

const cart3 = {

    taxRate: .1,
    subtotal: function (){ return 35;},
    total: function (){
        const thisObj = this
        function getTax(){
            return (thisObj.subtotal() * thisObj.taxRate);
        }
        return this.subtotal()* getTax();
    }
}
console.log(cart3.total())
// avoid using methods as callback functions
// setInterval(cart3.total, 2000) // error
// setInterval(() => {
//     console.log("total Method");
//     cart3.total() ;
// }, 2000)