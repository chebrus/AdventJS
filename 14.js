function missingReindeer(ids) {
    const idMax = Math.max(...ids);
    for (let i = 0; i < idMax; i++) {
        if (!ids.includes(i)) {
            return i;
        }
    }
    return idMax + 1;
}


missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
//¿Qué pasa que si el número de renos es muy grande no eres capaz de averiguarlo? :P