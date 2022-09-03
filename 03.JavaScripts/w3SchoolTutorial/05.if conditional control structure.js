alert("welcome to temp evaluation page!")
var temp = prompt("enter a value for temp")
var hot , cold ,average

if (temp > 80)
{
    alert("hot outside")
    console.log("hot outside")
    hot = true
    cold = false
    average = false
}else if( 50 <= temp <= 80)
{
    alert("Average temp out")
    console.log("Average temp out")
    hot = false
    cold = false
    average = true
}else if ( 32 <= temp < 50)
{
    alert("pretty cold outside")
    console.log("pretty cold outside")
    hot = false
    cold = true
    average = false
}else{
    alert("very cold outside!")
    console.log("very codl outside")
    hot = false
    cold = true
    average = false
}