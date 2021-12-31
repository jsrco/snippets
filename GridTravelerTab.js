const gridTraveler = (x, y) => {
    const table = Array(x + 1).fill().map(()=>Array(y+1).fill(0))
    table[1][1] =1
    for (let i = 0; i < x;i++) {
        for (let j = 0; j < y; j++) {
            const current = table [i][j]
            if (j + 1 <= y) table[i][j+1] += current
            if (i + 1 <= x) table[i+1][j] += current
        }    
    }
    return table[x][y];
}