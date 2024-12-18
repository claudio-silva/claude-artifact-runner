// proxy.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  const response = await fetch('https://script.google.com/macros/s/AKfycbzDth9_t9bR01hJv4-Q8Tg_raQcUkQnUff5uUDh6gb06C7fhTbzYWvJ-i5hdn7Rk2Gj/exec', {
    method: 'POST',
    body: JSON.stringify(req.body), // Ensure the body is stringified
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  res.json(data);
});

app.listen(5173, () => {
  console.log('Proxy server running on port 5000');
});