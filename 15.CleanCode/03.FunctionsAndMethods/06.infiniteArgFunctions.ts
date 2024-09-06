function sumUp(...numbers: number[]) {
    let sum = 0;
    for (const number of numbers)
    {
        sum += number;
    }
    return sum;
}

function sumUp2(numbers: number[]) {
    let sum = 0;
    for (const number of numbers)
    {
        sum += number;
    }
    return sum;
}

const total = sumUp(10, 10, 20, 23, 12)
console.log(total)

const total2 = sumUp2([10, 10, 20, 23, 12])
console.log(total2)