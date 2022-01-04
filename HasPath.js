const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}


const breadthFirst = (graph, src, dst) => {
    const queue = [src];
    while (que.length > 0) {
        const current = queue.shift()
        if (current === dst) return true
        for (let neighbor of graph[current]) {
            que.push(neighbor);
        }
    }

    return false
}




const depthFirst = (graph, src, dst) => {
    if (src === dst) return true;

    for (let neighbor of graph[src]) {
        if (depthFirst(graph, neighbor, dst) === true) {
            return true
        }
    }
    return false
}