
let port = NaN

let developingPort1 = port || 5000  // if port is 0 or NaN returns false, so we use nullish instead
console.log(developingPort1)

////////////////////// Nullish Op ( null or undefined) //////////////////
let developingPort2 = port ?? 5000
console.log(developingPort2)


let testPort = 0

let developingPort3 = (testPort || port) ?? 3000
console.log(developingPort3)

