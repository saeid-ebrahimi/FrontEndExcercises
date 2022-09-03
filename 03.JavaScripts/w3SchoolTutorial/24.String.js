let carName1 = "Volvo XC60"  // Double quotes
let carName2 = 'Volvo XC60'  // Single quotes
let answer1 = "It's alright"
let answer2 = "He is called 'Johnny'"
let answer3 = 'He is called "Johnny"'
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length
alert("text length: "+ length)

/*
'\' is escape character and there are following escape sequences:
\'
\"
\\
\n
\r
\t
\v
\b
\f
\a
 */

// breaking up strings using "\"
//document.getElementById("par").innerHTML = "Hello \
//Dolly!";
/*
The \ method is not the preferred method. It might not have universal support.
Some browsers do not allow spaces behind the \ character.
 */
document.getElementById('par').innerHTML = "Hello "

/*
Do not create Strings objects:
The new keyword complicates the code and slows down execution speed.
String objects can produce unexpected results:
Comparing two JavaScript objects always returns false.
 */
let s1 = new String("hello my friend")
let s2 = new String("hello my friend")
let s3 = "hello my friend"
document.getElementById('par').innerHTML += '<br>'
document.getElementById("par").innerHTML += "two object comparison: "+'<br>'
document.getElementById("par").innerHTML += 's1 == s2 : ' + (s1 == s2).toString()+ "<br>"
document.getElementById("par").innerHTML += 's1 === s2 : ' + (s1 === s2).toString()+ "<br>"
document.getElementById("par").innerHTML += "string and object comparison: "+'<br>'
document.getElementById("par").innerHTML += 's3 == s2 : ' + (s3 == s2).toString() + "<br>"
document.getElementById("par").innerHTML += 's3 === s2 : ' + (s3 === s2).toString()+ "<br>"