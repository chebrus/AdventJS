const sumPairs = (numbers, result) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let y = 0; y < numbers.length; y++) {
            if (i !== y && numbers[i] + numbers[y] === result) {
                return [numbers[i], numbers[y]]
            }
        }
    }
    return null
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))