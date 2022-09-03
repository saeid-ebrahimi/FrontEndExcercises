alert("welcome to order page!")
var order = prompt("Enter your order please:")
order = Number(order)
// switch use restrict equation: ===
switch (order)
{
    case 1:
        alert("you ordered a pizza")
        break
    case 2:
        alert("you ordered cheese berger")
        break
    case 3:
        alert("you ordered stake")
        break
    case 4:
        alert("you ordered snack")
        break
    case 5:
        alert("you ordered sausage")
        break
    case 6:
        alert("you ordered barbeque")
        break
    default:
        alert("invalid option entered!")
        break;
}
console.log("End of ordering!")
