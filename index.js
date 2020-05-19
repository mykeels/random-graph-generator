/**
 * generates a graph around supplied nodes
 * 
 * @param {Array} nodes An array of data to be hidden in the generated graph
 * @param {{ maxDepth: number, maxWidth: number, nodeCount: number }} options 
 */
function generateRandomGraph(nodes, { maxDepth, maxWidth, nodeCount }) {
    if (!Math.floor(nodeCount)) throw new Error('[nodeCount] must be a positive integer');
    if (!Math.floor(maxDepth)) throw new Error('[maxDepth] must be a positive integer');
    if (!Math.floor(maxWidth)) throw new Error('[maxWidth] must be a positive integer');

    if (!nodes || !Array.isArray(nodes) || !nodes.length) return [];
}

module.exports = generateRandomGraph;