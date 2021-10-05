const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === "") return 1

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numwaysForRest = canConstruct(target.slice(word.length), wordBank, memo)
            totalCount += numwaysForRest
        }
    }
    memo[target] = totalCount
    return totalCount 
}

console.log(canConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))