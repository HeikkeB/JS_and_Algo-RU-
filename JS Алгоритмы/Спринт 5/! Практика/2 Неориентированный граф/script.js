class Graph {
    constructor() {
        this.data = {};
    }
		
		// Добавляет вершину.
		// Если вершина уже существует, ничего не делает.
    addVertex(vertex) {
        ...
   }
		
		// Удаляет вершину.
    removeVertex(vertex) {
        ...
   }
		
		// Добавляет грань между двумя вершинами.
    addEdge(vertex1, vertex2) {
        ...
    }
		
		// Удаляет грань между двумя вершинами.
    removeEdge(vertex1, vertex2) {
        ...
    }
}

// Пример использованиия
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

console.log(graph.data);
/*
{
  A: ['B', 'C'],
  B: ['A'],
  C: ['A'],
  D: []
}
 */