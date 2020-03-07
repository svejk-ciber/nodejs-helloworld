const http = require('http');

const port = 3000;

if (! ("WORLD_STATE" in process.env)) {
  throw "WORLD_STATE is not set in the process environment.";  
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Goodbye, ${process.env.WORLD_STATE} world!`);
});

server.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
