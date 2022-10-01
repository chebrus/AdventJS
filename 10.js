const getCoins = (value) => {
    const coins = [1, 2, 5, 10, 20, 50];
    let arr = []
    for (let i = coins.length - 1; i >= 0; i--) {
        arr[i] = Math.floor(value / coins[i])
        let y = value % coins[i]
        if (arr[i] > 0) value = y
    }
    return arr

}

console.log(getCoins(51))
console.log(getCoins(3))
console.log(getCoins(5))
console.log(getCoins(16))
console.log(getCoins(100))