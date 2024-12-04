const http = require('http');

const PORT = process.env.PORT || 3000;
const ID = process.env.ID || 'Server';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Handled by ${ID}`);
});

server.listen(PORT, () => {
  console.log(`${ID} running on port ${PORT}`);
});
