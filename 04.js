function createXmasTree(height) {

    if (height < 1 || height > 100) return

    let str = ''
    for (let i = 1; i <= height; i++) {
        const lados = '_'.repeat(height - i)
        str += lados + '*'.repeat(i * 2 - 1) + lados + '\n'
    }
    let lados = '_'.repeat(height - 1)
    str += lados + '#'.repeat(1) + lados + '\n'
    lados = '_'.repeat(height - 1)
    str += lados + '#'.repeat(1) + lados
    return str

}

console.log(createXmasTree(5));