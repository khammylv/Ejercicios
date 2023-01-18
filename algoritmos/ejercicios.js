function sym(...args) {
    const arrayU = [...new Set(args)] 
    const nuevos = arrayU.map((array)=>{
        return [...new Set(array)]
    })
    const arrayUnido = nuevos.flat()
    const duplicados = [];
    const tempArray = [...arrayUnido].sort();
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] === tempArray[i]) {
            duplicados.push(tempArray[i]);
        }
    }
    const arrayFinal = []
    arrayUnido.forEach((item) => {
        if (!duplicados.includes(item)) {
            arrayFinal.push(item);
        }
    })
    const repetidos = arrayUnido.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
    const nuevo = []
    console.log(repetidos)
    Object.entries(repetidos).forEach(([key, value]) => {
        if (value > 1 && value%2 === 1) {
            console.log(value)
            console.log(key)
            nuevo.push(parseInt(key))
        }

    })
    const newArray = [...arrayFinal, ...nuevo]
    return newArray
    
}
//console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))