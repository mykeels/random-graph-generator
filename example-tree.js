const { generateRandomTree } = require("./index");

const NODES = 50;
const maxWidth = 3;
const edgeProbability = 0.5;

const CHUNKS = 10;
const trees = [];

let remainingNodes = NODES;

while (remainingNodes > 0) {
  const nodeCount = remainingNodes >= CHUNKS ? CHUNKS : (remainingNodes % CHUNKS);
  const graph = generateRandomTree(
    new Array(nodeCount).fill(null).map((_, i) => (i + ((trees.length) * CHUNKS)).toString()),
    {
      maxWidth,
      edgeProbability,
    }
  );
  trees.push(graph);
  remainingNodes -= CHUNKS;
}

const tree = { nodes: [], links: [] }

trees.forEach(g => {
  const s = g.serialize();
  if (tree.nodes.length) {
    tree.links.push({
      source: tree.nodes[0].id,
      target: s.nodes[0].id,
      weight: 1
    });
  }
  tree.nodes = tree.nodes.concat(s.nodes);
  tree.links = tree.links.concat(s.links);
});

console.log(
  JSON.stringify(
    tree,
    null,
    2
  )
);


// const { generateRandomTree, generateRandomGraph } = require("./index");

// console.log(
//   JSON.stringify(
//     generateRandomTree(
//       new Array(3000).fill(null).map((_, i) => i.toString()),
//       {
//         maxWidth: 3,
//         edgeProbability: 0.5,
//       }
//     ).serialize(),
//     null,
//     2
//   )
// );
