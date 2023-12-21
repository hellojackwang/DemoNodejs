//------------ callback example ------------
var fs = require("fs")

fs.readFile('d:/test2.txt',function(err,data){
	if(err) return console.error(err);
	console.log(data.toString());
});

var fs = require("fs")
var data=fs.readFileSync('d:/test2.txt');
console.log(data.toString());

console.log("callback done!\n");

//------- event example ------------
var events = require('events');
var eventEmitter = new events.EventEmitter();
 
//create handler
var connectHandler = function connected() {
   console.log('connection ok');  
   //trigger data_received event 
   eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function(){
   console.log('data receive ok');
});

eventEmitter.emit('connection');
console.log("event done!\n");


//------- stream example ------------
var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('d:/test2.txt');
readerStream.setEncoding('UTF8');

// handle stream event --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("stream done!\n");


//------- function ------------
function say(word) {
  console.log(word);
}
function execute(someFunction, value) {
  someFunction(value);
}
execute(say, "Hello");

console.log("fun done!\n");