const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(()=> [])
table[0] = [[]];

for (let i = 0; i <= target.length; i++) {
        for (let word in wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombo = table[i].map(subArray => [...subArray, word])
                table[i+word.length].push(...newCombo)
            }
        }
}
return table[target.length]
}

console.log(canConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))