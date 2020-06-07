const generate = require("./index");

console.log(
  JSON.stringify(
    generate(
      new Array(30).fill(null).map((_, i) => i.toString()),
      {
        maxWidth: 4,
        edgeProbability: 0.3,
      }
    ).serialize(),
    null,
    2
  )
);
