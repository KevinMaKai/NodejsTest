/*var fs =require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束");
*/

/*var fs = require("fs");
fs.readFile('input.txt',function(err,data){
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log("程序执行结束");
*/
// 引入 events 模块
/*var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected(){
	console.log('链接成功!');
// 触发 data_received 事件 
	eventEmitter.emit('data_received');
}
// 绑定 connection 事件处理程序
eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){
	console.log('数据接收成功！');
});

eventEmitter.emit('connection');

console.log("程序执行完毕。");*/


var fs = require('fs');
fs.readFile('input1.txt',function(err,data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("程序执行完毕。");


console.log(__filename);
console.log(__dirname);
