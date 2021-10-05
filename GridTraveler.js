

const gridTraveler = (x, y, memo = {}) => {
    const key = x + ',' + y
    if (key in memo) return memo[key]
    if (x === 1 && y === 1) return 1
    if (x === 0 && y === 0) return 0
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}