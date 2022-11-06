const getMinJump = (obstacles) => {
    const iteratorLength = 10
    const obstaclesOrder = obstacles.sort()

    //salto
    for (let salto = 1; salto <= iteratorLength; salto++) {
        //longitud
        let caidas = []
        let initSalto = 0

        while (initSalto < iteratorLength) {
            initSalto = salto + initSalto
            caidas.push(initSalto)
        }
        const lengthSaltos = caidas.length
        const obstaclesLength = obstacles.length
        const fusionLength = new Set(caidas.concat(obstacles))

        if (fusionLength.size === lengthSaltos + obstaclesLength) {
            return salto
        }

    }


}

console.log(getMinJump([5, 3, 6, 7, 9])) // -> 4
console.log(getMinJump([2, 4, 6, 8, 10])) // -> 7
console.log(getMinJump([1, 2, 3, 5])) // -> 4
console.log(getMinJump([3, 7, 5])) // -> 2
console.log(getMinJump([9, 5, 1])) // -> 2