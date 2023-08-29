const express = require('express');
const app = express();
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
// комментарий
app.get("/", function (require, response) {
  response.statusCode = 200;
  response.set('Content-Type', 'application/json');

  response.send({
    firstName: "Иван",
    lastName: "Иванов",
    address: {
      streetAddress: "Московское ш., 101, кв.101",
      city: "Ленинград",
      postalCode: 101101
    },
    phoneNumbers: [
      "812 123-1234",
      "916 123-4567"
    ]
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});