
let fName = prompt("Enter your first name please: ")
let lName = prompt("Enter your last name please: ")
let age = prompt("Enter your age please: ")
let height = prompt("Enter your height please: ")
let petName = prompt("Enter your pet name please: ")
alert("Thank you for sharing information!")
if ((fName[0] === lName[0] )&& (20<= age <= 30)
    && (height>= 170) && (petName[petName.length -1] === "y"))
    console.log("I got the spy!!")
else
    console.log("It's normal user")
