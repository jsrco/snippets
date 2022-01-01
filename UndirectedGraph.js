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

const hasPath = (graph, src, dst, visited) => {
    if (visited.has(src)) return false
    if (src === dst) return true

    visited.add(src)

    for (let neighbor in graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
            return true
        }
    }
    return false
}

const undirectedGraph = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)

    return hasPath(graph, nodeA, nodeB, new Set())
}