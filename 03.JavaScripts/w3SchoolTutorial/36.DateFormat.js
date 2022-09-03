//There are generally 3 types of JavaScript date input formats:
// ISO Format
const d1 = new Date("2010-5-17")
document.getElementById("demo").innerHTML += d1 + "<br>"
const d11 = new Date("2019-07")
document.getElementById("demo").innerHTML += d11 + "<br>"
const d111 = new Date("2019")
document.getElementById("demo").innerHTML += d111 + "<br>"
// Short Format
// Short dates are written with an "MM/DD/YYYY"
const d2 = new Date("04/20/2015")
document.getElementById("demo").innerHTML += d2 + "<br>"
// Long Format
// Long dates are most often written with a "MMM DD YYYY" syntax
// Month and day can be in any order
// month can be written in full (January), or abbreviated (Jan)
// Commas are ignored. Names are case insensitive
const d3 = new Date("Mar 25 2015" )
const d4 = new Date("25 March 2015")
document.getElementById("demo").innerHTML += d3 + "<br>"
document.getElementById("demo").innerHTML += d4 + "<br>"
// ISO dates can be written with added hours,
// minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
// If you want to modify the time relative to UTC,
// remove the Z and add +HH:MM or -HH:MM instead:
// Note: In some browsers, months or days with no
// leading zeroes may produce an error
const d5 = new Date("2018-08-19T12:24:18Z")
const d6 = new Date("2018-08-19T12:24:18+03:30")
document.getElementById("demo").innerHTML += d5 + "<br>"
document.getElementById("demo").innerHTML += d6 + "<br>"
// UTC (Universal Time Coordinated)
// is the same as GMT (Greenwich Mean Time).
// If a date/time is created in GMT (Greenwich Mean Time), the date/time
// will be converted to CDT (Central US Daylight Time) if a user browses
// from central US.

// convert date to ms
let mSec = Date.parse("2015-05-12")
document.getElementById("demo").innerHTML += mSec + "<br>"

const d7 = Date(mSec)
document.getElementById("demo").innerHTML += d7 + "<br>"




