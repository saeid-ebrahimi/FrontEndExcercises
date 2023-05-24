let prices = [1_000, 2_000_000, 500_000, 90_000, 33_000]

let totalPrice = prices.reduce((prevPrice, currentPrice) => {
    console.log(prevPrice, currentPrice) // 1000 2000000 | 2000000 500000 | ... | 90000 33000

    return prevPrice + currentPrice
})

console.log('Reduce Output (Total Price):', totalPrice);

// ['ali', 'mmd', 'amin', 'qadir', 'sasan', 'ali', 'qadir'] => {ali: 2, mmd: 1, amin: 1, qadir: 2, sasan: 1}