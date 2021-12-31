const allConstruct = (target, wordBank) => {
    if ("" === target) return [[]]
    if (target in memo) return memo[target]
    const result = []
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank)
            const targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }
    memo[target] = result
    return result
}