// JS don't support while else and for else but it has do while
var x = 0
while (x < 5){
    console.log("current x is: "+ x)
    console.log("x is less than 5")
    if (x === 3){
        console.log("X IS EQUAL TO 3")
        break
    }
    x += 1
}

var y = 0
do {
       if (y % 2 === 0)
        console.log(y)
    y += 1
}while ( y < 11)