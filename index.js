const express = require('express');
const serveIndex = require('serve-index');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.use(serveIndex(__dirname, { 'icons': true }));

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.get('*', (req, res) => {
  res.status(404)
  res.sendFile(__dirname+'/404.html')
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});