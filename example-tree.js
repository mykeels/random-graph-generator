const { generateRandomTree, generateRandomGraph } = require("./index");

console.log(
  JSON.stringify(
    generateRandomTree(
      new Array(1000).fill(null).map((_, i) => i.toString()),
      {
        maxWidth: 3,
        edgeProbability: 0.5,
      }
    ).serialize(),
    null,
    2
  )
);
