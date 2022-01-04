const shortestPath = (edges, nodeA, nodeB) => {
    const visted = new Set([nodeA])
    const graph = buildGraph(edges)
    const queue = [[nodeA, 0]];

    while (queue.length > 0) {
        const [node, distance] = queue.shift()
        if (node === nodeB) return distance

        for (let neighbor of graph[current]) {
            if (!visted.has(neighbor)) {
                visted.add(neighbor)
                queue.push([neighbor, distance + 1])
            }
        }
    }
    return -1
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge in edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}
