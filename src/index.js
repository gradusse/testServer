const express = require('express');
const app = express();
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
// комментарий
app.get("/", function(require, response){
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  const data = fs.readFileSync('src/object.json', 'utf8');

  response.end(data);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});