const http = require('http');
const fs = require('fs');
let requestsCount = 0;

const server = http.createServer( (request, response) => {
switch (request.url) {
    case '/home': {
        const data = fs.readFileSync('src/object.json');
        response.write(data);
        break;
    };
    default: {
        response.write('404 not found');
    };
    };
    response.end();
    });
    server.listen(3003);