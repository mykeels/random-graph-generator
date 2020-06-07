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

/**
 * generates a tree of supplied nodes
 * 
 * @param {Array} nodes An array of data to be nodes in the generated tree
 * @param {{ edgeProbability: number, maxWidth: number }} options 
 */
function generateRandomTree(nodes, { maxWidth, edgeProbability }) {
    if (!Math.floor(maxWidth)) throw new Error('[maxWidth] must be a positive integer');
    if (!edgeProbability || Number(edgeProbability) <= 0) throw new Error('[edgeProbability] must be a positive float');

    const tree = Graph();

    tree.degree = node => tree.indegree(node) + tree.outdegree(node);

    if (!nodes || !Array.isArray(nodes) || !nodes.length) return tree;

    let existingNodesCount = 0;
    for (const node of nodes) {
        tree.addNode(node);
        existingNodesCount++;

        let i = 0
        while (existingNodesCount > 1) {
            const modulo = i % existingNodesCount;
            const nodeDegree = tree.degree(node);
            const edgeDegree = tree.degree(nodes[modulo]);
            if (Math.random() < edgeProbability && node !== nodes[modulo] && nodeDegree < maxWidth && edgeDegree < maxWidth) {
                tree.addEdge(node, nodes[modulo]);
                break;
            }
            i++;
        }
    }

    return tree;
}

module.exports.generateRandomGraph = generateRandomGraph;
module.exports.generateRandomTree = generateRandomTree;