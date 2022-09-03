
var ham  = prompt("how many hamberger order?")
var cheese = prompt("how many cheese order?")

var report = "blank"
if (ham >= 10 || cheese >= 10)
    report = "strong sales of both!"
else if (ham == 0 && cheese == 0)
    report = "nothing sold!"
else
    report = "something from both sold!"

alert(report)
console.log(report)