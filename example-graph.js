const { generateRandomGraph } = require("./index");

const NODES = 5000;
const maxWidth = 5;
const edgeProbability = 0.3;

const CHUNKS = 500;
const graphs = [];

let remainingNodes = NODES;

while (remainingNodes > 0) {
  const nodeCount = remainingNodes >= CHUNKS ? CHUNKS : (remainingNodes % CHUNKS);
  const graph = generateRandomGraph(
    new Array(nodeCount).fill(null).map((_, i) => (i + ((graphs.length) * CHUNKS)).toString()),
    {
      maxWidth,
      edgeProbability,
    }
  );
  graphs.push(graph);
  remainingNodes -= CHUNKS;
}

const graph = { nodes: [], links: [] }

graphs.forEach(g => {
  const s = g.serialize();
  if (graph.nodes.length) {
    graph.links.push({
      source: graph.nodes[0].id,
      target: s.nodes[0].id,
      weight: 1
    });
  }
  graph.nodes = graph.nodes.concat(s.nodes);
  graph.links = graph.links.concat(s.links);
});

console.log(
  JSON.stringify(
    graph,
    null,
    2
  )
);
