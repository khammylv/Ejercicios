function createCube(size) {
    let arriba = [];
    let abajo = [];
    for(let i = 1; i <= size; i++) {
        // console.log(i)
        // console.log(size - i)
       
        arriba.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size))
    }
    console.log(arriba)
    for(let i = size; i >= 1; i--) {
        console.log(i)
        abajo.push(" ".repeat(size- i) + "\\/".repeat(i) + "_/".repeat(size))
        //arriba.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size))
    }
    console.log(abajo)
    console.log([...arriba, ...abajo].join("\n"))
    return [...arriba, ...abajo].join("\n")
}

console.log(createCube(3))