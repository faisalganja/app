console.log('🚀 Hello World app starting...');
require('http').createServer((req, res) => {
  res.end('Hello from Jenkins Pipeline!\n');
}).listen(8080, () => {
  console.log('✅ Server running on port 8080');
});