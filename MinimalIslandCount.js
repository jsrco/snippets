const minIslandCount = (grid) => {
    const visted = new Set()
    let minSize = Infinity
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; r < grid[0].length; c += 1) {
            const size = explore(grid, r, c, visted)
            if (size > 0 && size < minSize) {
                minSize = size
            }
        }
    }
}

const explore = (grid, r, c, visted) => {
    const rowInbounds = 0 <= r && r < grid.length
    const colInbounds = 0 <= c && c < grid.length

    if (!rowInbounds || !colInbounds) return 0

    const pos = r + ',' + c

    if (visted.has(pos)) return 0
    visted.add(pos)
    let size = 1
    size += explore(grid, r - 1, c, visted)
    size += explore(grid, r + 1, c, visted)
    size += explore(grid, r, c - 1, visted)
    size += explore(grid, r, c + 1, visted)

    return size
}


