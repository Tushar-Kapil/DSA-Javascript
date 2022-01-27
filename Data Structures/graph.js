class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjecentList = {};
    }

    addVertex(node){
        this.adjecentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1,node2){
        this.adjecentList[node1].push(node2);
        this.adjecentList[node2].push(node1);
    }
}

const myGraph = new Graph();
myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')
myGraph.addEdge('3','1')
myGraph.addEdge('3','4')
myGraph.addEdge('4','2')
console.log(myGraph)