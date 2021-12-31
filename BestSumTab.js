const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = []

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] != null) {
            for (let num of numbers) {
                const comboination = [...table[i], num]
                if (!table[i + num] || table[i + num].length > comboination.length) {
                    table[i + num] = comboination
                }
            }
        }
    }
    return table[targetSum]
}