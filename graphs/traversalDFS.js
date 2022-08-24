const traversal = (vertex, graph, values, seen) => {
  values.push(vertex);
  seen[vertex] = true;
  const conns = graph[vertex];
  for (let i = 0; i < conns.length; i++) {
    const conn = conns[i];
    if (!seen[conn]){
	traversal(conn, graph, values, seen)
    }
  }
  return values;
}

module.exports = traversal;
