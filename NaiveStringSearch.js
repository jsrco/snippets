const naiveSearch = (long, short) => {
    let inc = 0;
    let count = 0
    while (inc < (long.length - short.length) ) {
        if (long.slice(inc, (short.length + inc)) === short) {
            count++ 
            inc++
        } else inc++
    }
    return count
};
