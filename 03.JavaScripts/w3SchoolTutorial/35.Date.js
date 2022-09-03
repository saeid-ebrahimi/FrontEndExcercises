
const date1 = new Date()
const date2 = new Date(2018, 9 , 14)
const date3 = new Date(2010, 4, 23, 20, 19, 18, 131)
const date4 = new Date(198729)
document.getElementById("d").innerHTML  += date1 + "<br>"
document.getElementById("d").innerHTML  += date2 + "<br>"
document.getElementById("d").innerHTML  += date3 + "<br>"
document.getElementById("d").innerHTML  += date4 + "<br>"
// specifying a value higher than max, caused overflow
// Specifying a day higher than max,
// will not result in an error but add the overflow to the next month:
// two digit year considered as previous century :
// 98 -> 1998
const date5 = new Date(97, 18)
document.getElementById("d").innerHTML  += date5 + "<br>"
const date6 = new Date("October 13, 2020 11:13:00")
document.getElementById("d").innerHTML += date6 + "<br>"
//new Date(milliseconds) creates a new date object
// as zero time plus milliseconds:
// Zero time is January 01, 1970 00:00:00 UTC.
const date7 = new Date(18834234009)
document.getElementById("d").innerHTML += date7 + "<br>"
const date8 = new Date(-834234009)
document.getElementById("d").innerHTML += date8 + "<br>"

// When you display a date object in HTML,
// it is automatically converted to a string, with the toString() method.
// UTC format
document.getElementById("d").innerHTML += date8.toUTCString() + "<br>"
// ISO format
document.getElementById("d").innerHTML += date8.toISOString() + "<br>"
// Just Date
document.getElementById("d").innerHTML += date8.toDateString() + "<br>"