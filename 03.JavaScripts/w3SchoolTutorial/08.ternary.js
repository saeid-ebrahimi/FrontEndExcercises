var score = prompt("enter your number:")
score = Number(score)
var result = score < 10 ?
    (score == 0 ? "failed and minimum score": "failed")
    :(score == 20? "passed and maximum number": "passed")
alert(result)