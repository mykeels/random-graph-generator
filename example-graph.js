const { generateRandomGraph } = require("./index");

const NODES = 5000;
const maxWidth = 5;
const edgeProbability = 0.3;
const NO_OF_BRIDGES = 10;

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
  graphs.push(graph.serialize());
  remainingNodes -= CHUNKS;
}

for (let i = 0; i < graphs.length; i++) {
  const g1 = graphs[i];
  for (let j = 0; j < graphs.length; j++) {
    if (j == i) continue;
    const g2 = graphs[j];

    let connectedBridges = Math.floor(NO_OF_BRIDGES / graphs.length);
    while (connectedBridges > 0) {
      let g1Index = Math.floor(Math.random() * g1.nodes.length - 1) + 1;
      let g2Index = Math.floor(Math.random() * g1.nodes.length - 1) + 1;

      if (g1Index != g2Index) {
        g1.links.push({
          source: g1.nodes[g1Index].id,
          target: g2.nodes[g2Index].id,
          weight: 1
        });
        connectedBridges--;
        // console.log(`graph(${i}, ${g1Index}), graph(${j}, ${g2Index})`);
      }
    }
  }
}

const graph = {
  nodes: graphs.reduce((arr, g) => arr.concat(...g.nodes), []),
  links: graphs.reduce((arr, g) => arr.concat(...g.links), []),
}

console.log(
  JSON.stringify(
    graph,
    null,
    2
  )
);
