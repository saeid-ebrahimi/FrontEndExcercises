function sleepIn(weekday, vacation){
    return (!weekday || vacation)
}

function monkeyTrouble(aSmile, bSmile){
    return (aSmile && bSmile) || (!aSmile && !bSmile)
}

function stringTimes(str, n){
    let result = ""
    let cnt = 0
    while (cnt < n){
        result += str
        cnt++
    }
    return result;
}
function luckySum(a, b, c){
    if (a === 13){
        return 0
    }
    else if (b === 13){
        return a
    }
    else if (c === 13){
        return a + b
    }
    else{
        return a + b + c
    }
}

function catchSpeeding(speed, isBirthday){
    if (isBirthday)
        speed -= 5
    if (speed <= 60)
        return 0
    if (60<speed <= 90)
        return 1
    return 2
}
function makeBricks(small, big, goal){
    return (0 <= goal%5 <= small) && small + 5*big >= goal

}