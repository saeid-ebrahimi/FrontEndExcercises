// Default Parameter and Rest Parameter started with ECMAScript 2015

// before default parameter
function multiply(a,b){
    b = typeof b !== "undefined" ? b:1
    return a*b
}
alert(multiply(12))

// after default parameter
function multiply2(a,b=1){
    return a * b
}

// rest parameter and arrow

function multiply3(multiplier, ...args){
    return args.map( a => multiplier*a)
}
let ar = multiply3(5, "12","16", "25", "hello")
alert(ar)
let a = ["hell", "burn", "life", "death", "living"]
let a2 = a.map(function (s){ return s.length})
alert(a2)
let a3 = a.map( s => s.length)
alert(a3)


