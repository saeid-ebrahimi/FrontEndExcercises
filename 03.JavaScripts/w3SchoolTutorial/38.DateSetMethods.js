// setDate() 	Set the day as a number (1-31)
// setFullYear() 	Set the year (optionally month and day)
// setHours() 	Set the hour (0-23)
// setMilliseconds() 	Set the milliseconds (0-999)
// setMinutes() 	Set the minutes (0-59)
// setMonth() 	Set the month (0-11)
// setSeconds() 	Set the seconds (0-59)
// setTime() 	Set the time (milliseconds since January 1, 1970)

const date1 = new Date()
date1.setFullYear("2020")
document.getElementById("demo").innerHTML += date1 + "<br>"
date1.setFullYear(2021,4,21)
document.getElementById("demo").innerHTML += date1 + "<br>"
date1.setMonth("10")
document.getElementById("demo").innerHTML += date1 + "<br>"
date1.setDate(21)
document.getElementById("demo").innerHTML += date1 + "<br>"
date1.setHours("22")
document.getElementById("demo").innerHTML += date1 + "<br>"
date1.setMinutes(28)
document.getElementById("demo").innerHTML += date1 + "<br>"
date1.setSeconds(48)
document.getElementById("demo").innerHTML += date1 + "<br>"
date1.setMilliseconds(812)
document.getElementById("demo").innerHTML += date1 + "<br>"
date1.setTime(1234567890987)
document.getElementById("demo").innerHTML += date1 + "<br>"

// setUTCDate() 	Set the day as a number (1-31)
// setUTCFullYear() 	Set the year (optionally month and day)
// setUTCHours() 	Set the hour (0-23)
// setUTCMilliseconds() 	Set the milliseconds (0-999)
// setUTCMinutes() 	Set the minutes (0-59)
// setUTCMonth() 	Set the month (0-11)
// setUTCSeconds() 	Set the seconds (0-59)
// setUTCTime() 	Set the time (milliseconds since January 1, 1970)
