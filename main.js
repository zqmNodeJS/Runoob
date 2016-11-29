// main.js

/* 阻塞代码示例 */
/*

var fs = require('fs');

let data = fs.readFileSync('input.txt');

console.log(data.toString());

console.log('程序执行结束!');

*/


/* 非阻塞代码示例 */
/*
let fs = require('fs');

let data = fs.readFile('input2.txt', (err, data) => {
	if (err) {
		return console.log(err.stack)
	}
	console.log(data.toString())
});

console.log('程序执行结束!');
*/

/* EventEmitter */

// 引入 events 模块
var events = require('events');
// 创建 enventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = () => {
	console.log('连接成功!');

	// 触发 data_received 事件
	eventEmitter.emit('data_received');
}


// 绑定connection 事件处理程序

eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', ()=>{
	console.log('数据接收成功.');
});

// 触发 connection 事件
eventEmitter.emit('connection');

console.log('程序执行结束.');

// http://www.runoob.com/nodejs/nodejs-event.html
