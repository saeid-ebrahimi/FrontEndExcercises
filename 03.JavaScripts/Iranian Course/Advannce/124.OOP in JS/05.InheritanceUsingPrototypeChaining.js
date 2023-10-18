function Animal(){
}
function Mamal(){
}
function Cat(){
}

Mamal.prototype = Object.create(Animal.prototype)
Cat.prototype = Object.create(Mamal.prototype)

Animal.prototype.eat = function () { return "Food Consumed!"}
Mamal.prototype.milk = function (){ return "Milk produced!"}
Cat.prototype.claw = function () { return "I claw you!"}

let sam = new Cat();
console.log(sam.eat())
console.log(sam.milk())
console.log(sam.claw())
let genericMamal = new Mamal();
console.log(genericMamal.eat())
console.log(genericMamal.milk())
// console.log( genericMamal.claw())

// polymorphism
Cat.prototype.eat = function (){ return "Cat food Consumed"}
console.log(sam.eat())


// better way
// Function.prototype.extends = function (superClass){
//     this.prototype = Object.create(superClass.prototype);
//     this.prototype.constructor = this;
// }
//
// Mamal.extends(Animal)
// Cat.extends(Mamal)