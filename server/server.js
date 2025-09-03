// filepath: /Users/gretchen/Programming/SebTennis/seb-tennis/server/server.js
const express = require('express');
const app = express();
app.use(express.json());

let utrValue = "9.15";

app.get('/api/utr', (req, res) => {
  res.json({ utr: utrValue });
});

app.post('/api/utr', (req, res) => {
  utrValue = req.body.utr;
  res.json({ utr: utrValue });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});