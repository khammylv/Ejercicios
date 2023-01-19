function unusedDigits(...args) {
    const arg = args.join();
    console.log(arg);
    const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const datos = []
    for (let i = 0; i < data.length; i++) {

        if (!arg.includes(i)) {
            datos.push(data[i])
        }

    }
    return datos.join('');
}

console.log(unusedDigits(12, 34, 56, 78))