const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombo = null

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombo = bestSum(remainder, numbers, memo)

        if (remainderCombo !== null) {
            const combo = [...remainderCombo, num]
            if (shortestCombo === null || combo.length < shortestCombo.length) {
                shortestCombo = combo
            }
        }
    }

    memo[targetSum] = shortestCombo
    return shortestCombo
}