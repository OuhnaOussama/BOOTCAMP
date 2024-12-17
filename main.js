// server.mjs
import http from 'http'
let todos = [
  {id: 1, task:"ahmed khadila"} ,{id: 2, task:"rrrrrrrrrrr"}
]
const server = http.createServer((req, res) => {
  // get
  if (req.method === 'GET' && req.url === '/todos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos))
  }


  // POST 
    else if (req.method === 'POST' && req.url === '/todos') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      
      req.on('end', () => {
        try {
          const newTodo = JSON.parse(body);
          // Générer un nouvel ID
          newTodo.id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
          todos.push(newTodo);
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(newTodo));
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON format' }));
        }
      });
    }
  
    // PUT - Modifier un todo existant
    // else if (req.method === 'PUT' && req.url.startsWith('/todos/')) {
    //   const id = parseInt(req.url.split('/')[2]);
    //   let body = '';
      
    //   req.on('data', chunk => {
    //     body += chunk.toString();
    //   });
  
    //   req.on('end', () => {
    //     try {
    //       const updatedTodo = JSON.parse(body);
    //       const index = todos.findIndex(todo => todo.id === id);
          
    //       if (index !== -1) {
    //         todos[index] = { ...todos[index], ...updatedTodo, id };
    //         res.writeHead(200, { 'Content-Type': 'application/json' });
    //         res.end(JSON.stringify(todos[index]));
    //       } else {
    //         res.writeHead(404, { 'Content-Type': 'application/json' });
    //         res.end(JSON.stringify({ error: 'Todo not found' }));
    //       }
    //     } catch (error) {
    //       res.writeHead(400, { 'Content-Type': 'application/json' });
    //       res.end(JSON.stringify({ error: 'Invalid JSON format' }));
    //     }
    //   });
    // }
  
    // DELETE - Supprimer un todo
    else if (req.method === 'DELETE' && req.url.startsWith('/todos/')) {
      const id = parseInt(req.url.split('/')[2]);
      const index = todos.findIndex(todo => todo.id === id);
      
      if (index !== -1) {
        const deletedTodo = todos.splice(index, 1)[0];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(deletedTodo));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Todo not found' }));
      }
    }
  
    // Gérer les requêtes non reconnues
    else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Route not found' }));
    }
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
