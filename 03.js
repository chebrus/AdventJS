const letters = "(asdas) bici" // ❌

function isValid(letters) {

    let value = letters.includes('(') && letters.includes(')')
    if (!value) return false
    value = letters.split('(').find(lets => lets.includes(')')).split(')')[0]
    if (!value) return false
    return !(value.includes('[') || value.includes(']') || value.includes('{') || value.includes('}'))
}

console.log(isValid(letters))
