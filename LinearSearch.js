const linearSearch = (arr, num) => {
    let inc = 0;
    while (inc < arr.length) {
        if (arr[inc] === num) return inc
        inc++
    }
    return -1
}