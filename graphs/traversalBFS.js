module.exports = (adjList) => {
   const queue = [0];
   const values = [];
   const seen = {};
   while(queue.length){
     const value = queue.shift();
     values.push(value);
     seen[value] = true;
     const conns = adjList[value];
     for(let i = 0; i < conns.length; i++) {
       const conn = conns[i];
       if (!seen[conn]) {
         queue.push(conn);
       }
     }
   }
   return values;
};
