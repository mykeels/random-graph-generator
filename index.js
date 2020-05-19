const Graph = require('graph-data-structure');

/**
 * generates a graph of supplied nodes
 * 
 * @param {Array} nodes An array of data to be nodes in the generated graph
 * @param {{ edgeProbability: number, maxWidth: number }} options 
 */
function generateRandomGraph(nodes, { maxWidth, edgeProbability }) {
    if (!Math.floor(maxWidth)) throw new Error('[maxWidth] must be a positive integer');
    if (!edgeProbability || Number(edgeProbability) <= 0) throw new Error('[edgeProbability] must be a positive float');

    const graph = Graph();

    graph.degree = node => graph.indegree(node) + graph.outdegree(node);

    if (!nodes || !Array.isArray(nodes) || !nodes.length) return graph;

    let existingNodesCount = 0;
    for (const node of nodes) {
        graph.addNode(node);
        let edgeCount = 0;
        for (let i = 0; i < existingNodesCount; i++) {
            if (Math.random() < edgeProbability) {
                if (graph.degree(nodes[i]) >= maxWidth) continue;
                graph.addEdge(node, nodes[i]);
                edgeCount++;
                if (edgeCount > maxWidth) break;
            }
        }
        existingNodesCount++;
    }

    return graph;
}

module.exports = generateRandomGraph;