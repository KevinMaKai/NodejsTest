var buf1 = new Buffer([10,20,30,40,50]);
console.log(buf1.toString());
var buf  = new Buffer('www.makai.site','utf-8');
buf = new Buffer(256);
len = buf.write('www.makai.site');
console.log('写入字节数：'+len);

buf = new Buffer(26);
for (var i = 0; i <26; i++) {
	buf[i] = i + 97;
}

console.log(buf.toString('ascii'));   //输出：abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5)); //输出：abcde
console.log(buf.toString('utf8',0,5));//输出:abcde
console.log(buf.toString(undefined,0,5));//使用‘utf8’编码，并输出：abcde

var buf = new Buffer('www.makai.site');
var json = buf.toJSON(buf);

console.log(buf.toString());
console.log(json);

var buffer1 = new Buffer('菜鸟教程');
var buffer2 = new Buffer('www.makai.site');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('buffer3的内容：'+buffer3.toString());


var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
if(result<0){
   console.log(buffer1 + "在" + buffer2 + "之前");
}else if(result ==0 ){
   console.log(buffer1 + "与" + buffer2 +"相同");
}else{
   console.log(buffer1 + "在" + buffer2 + "之后");
}

var buffer1 = new Buffer('Listen to my heartbeat');
//拷贝一个缓冲区
var buffer2 = new Buffer(30);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString() );

var buffer1 = new Buffer('rainer');
//剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log('buffer2 content: '+  buffer2.toString());

console.log(buffer1.length);




