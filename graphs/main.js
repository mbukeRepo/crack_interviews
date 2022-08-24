const traversalBFS = require("./traversalBFS");
const traversalDFS = require("./traversalDFS");

const adjList = [
            [1,3], [0],
            [3, 8], [0, 4, 5, 2],
            [3, 6], [3], [4, 7],
            [6], [2]
];

//const traversed = traversalBFS(adjList);
const traversed = traversalDFS(0, adjList, [], {});
console.log(traversed);
