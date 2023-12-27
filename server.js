var http = require('http');
var handleRequest = function(request, response) {
response.writeHead(200);
response.end("Hello World! SS2 OCP v0");
}
var www = http.createServer(handleRequest);
window.addEventListener('load', () => {
  document.body.style.backgroundColor = 'green';
});
www.listen(8080);
