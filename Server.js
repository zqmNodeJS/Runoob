// HelloNode.js
var http = require("http");

http.createServer((request, response) => {

	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	// 发送响应数据 'Hello NodeJS'
	response.end('Hello NodeJS');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888');