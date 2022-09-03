function myConcat(separator){
    let result = " "
    for (let i=1; i< arguments.length; i++)
        result += arguments[i]+ separator
    return result
}
console.log(myConcat(", ",12, 56, 78, 90,"nick"))
document.getElementById("demo").innerHTML += myConcat(", ", 12, 56, 78, 90,"nick")
alert(myConcat(", ",12, 56, 78, 90,"nick"))

console.log(myConcat(" | ",44,566,87,990,54,62))
document.getElementById("demo").innerHTML += myConcat(" | ", 44,566,87,990,54,62)
alert(myConcat(" | ",44,566,87,990,54,62))
