  GNU nano 7.2                                               index.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

Save and close the index.js file.

Add and commit the new files:

bash

git add package.json index.js
git commit -m "Add simple Node.js application"

Push the changes to GitHub:

bash

