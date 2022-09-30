const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]


const maxProfit = (prices) => {
    let value = -1
    for (let i = 0; i < prices.length; i++) {
        for (let y = 0; y < prices.length; y++) {
            if (i < y && prices[i] < prices[y]) {
                let sum = prices[y] - prices[i]
                value = sum > value ? sum : value
            }
        }
    }
    return value
}

console.log(maxProfit(pricesBtc))
console.log(maxProfit(pricesEth))
const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log(maxProfit(pricesDoge) ) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda))