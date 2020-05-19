# Random Graph Generator

A utility functon that generates a graph around supplied nodes, given parameters like `maxWidth` and `edgeProbability`. 🤞

## Usage

```js
const generateGraph = require('random-graph-generator');

const nodes = [
    '1',
    '2',
    '3',
    '4',
    '5'
];

generateGraph(nodes, { maxWidth: 2, edgeProbabilty: 0.3 });
```

Have fun!
