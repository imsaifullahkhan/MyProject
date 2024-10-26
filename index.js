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

    git push

Part 5: Run the Application Locally

To test the application, you can run it locally:

bash

node index.js

Visit http://127.0.0.1:3000 in your browser to see the "Hello, World!" message.
