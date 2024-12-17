const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

// --- GET Route ---
app.get('/app', (req, res) => {
    res.send('Welcome to the root route!');
  });
  
  

// --- POST Route ---
app.post('/app', (req, res) => {
    res.send('Welcome to the root route!');
  });

// --- DELETE Route ---
app.delete('/app', (req, res) => {
    res.send('Welcome to the root route!');
  });



// --- PUT Route ---
app.put('/app', (req, res) => {
    res.send('Welcome to the root route!');
  });


