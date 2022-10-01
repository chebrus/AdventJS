const shouldBuyFidelity = (times) => {
    const initValue = 12
    const normal = times * initValue;
    let fidelity = 250;
    for (let i = 1; i <= times; i++) {
        fidelity += initValue * Math.pow(0.75, i)
    }
    return fidelity < normal;
}


console.log(shouldBuyFidelity(1))
console.log(shouldBuyFidelity(3))
console.log(shouldBuyFidelity(100))