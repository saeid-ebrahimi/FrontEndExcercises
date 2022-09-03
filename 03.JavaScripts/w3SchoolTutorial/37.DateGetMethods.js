
// The getTime() method returns the number of milliseconds since January 1, 1970:
const date1 = new Date("2001-01-11T22:10:30")
let mSec = date1.getTime()
document.getElementById("demo").innerHTML += mSec + " in msec" + "<br>"
let year = date1.getFullYear()
document.getElementById("demo").innerHTML += "year: " +year + "<br>"
//The getMonth() method returns the month of a date as a number (0-11):
let month = date1.getMonth()
document.getElementById("demo").innerHTML +="month: " + month + "<br>"
let day = date1.getDate()
document.getElementById("demo").innerHTML += "day: " +day + "<br>"
// The getDay() method returns the weekday of a date as a number (0-6):
let weekday = date1.getDay()
document.getElementById("demo").innerHTML +=  weekday + " day of the week" + "<br>"

let hours = date1.getHours()
document.getElementById("demo").innerHTML += "hour: " + hours + "<br>"

let minutes = date1.getMinutes()
document.getElementById("demo").innerHTML += "minute: " + minutes + "<br>"

let seconds = date1.getSeconds()
document.getElementById("demo").innerHTML += "second: " + seconds + "<br>"

let milliseconds = date1.getMilliseconds()
document.getElementById("demo").innerHTML += "milli seconds: " + milliseconds + "<br>"

//getUTCDate() 	Same as getDate(), but returns the UTC date
// getUTCDay() 	Same as getDay(), but returns the UTC day
// getUTCFullYear() 	Same as getFullYear(), but returns the UTC year
// getUTCHours() 	Same as getHours(), but returns the UTC hour
// getUTCMilliseconds() 	Same as getMillisecon  66ds(), but returns the UTC milliseconds
// getUTCMinutes() 	Same as getMinutes(), but returns the UTC minutes
// getUTCMonth() 	Same as getMonth(), but returns the UTC month
// getUTCSeconds() 	Same as getSeconds(), but returns the UTC seconds

let utcHours = date1.getUTCHours()
document.getElementById("demo").innerHTML += "UTC hour: " + utcHours + "<br>"

let utcMinutes = date1.getUTCMinutes()
document.getElementById("demo").innerHTML += "UTC minutes: " + utcMinutes + "<br>"
