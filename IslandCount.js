const islandCount = (grid) => {
    const visted = new Set()
    let count = 0
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; r < grid[0].length; c += 1) {
            if (explore(grid, r, c, visted)) {
                count += 1
            }
        }
    }
}

const explore = (grid, r, c, visted) => {
    const rowInbounds = 0 <= r && r < grid.length
    const colInbounds = 0 <= c && c < grid.length

    if (!rowInbounds || !colInbounds) return false

    const pos = r + ',' + c

    if (visted.has(pos)) return false
    visted.add(pos)
    explore(grid, r - 1, c, visted)
    explore(grid, r + 1, c, visted)
    explore(grid, r, c - 1, visted)
    explore(grid, r, c + 1, visted)

    return true
}


