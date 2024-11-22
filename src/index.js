const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '192.168.10.42';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const filePath = path.join(__dirname, './data/users.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error reading file\n');
      return;
    }
 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
