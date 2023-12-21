//------- http client ------------
var http = require('http');
 

var options = {
   host: 'localhost',
   port: '8080',
   path: '/index.html'  
};
 
//callback to handle response
var callback = function(response){
   // update data constantly
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // data receive done
      console.log(body);
   });
}
// send request to server
var req = http.request(options, callback);
req.end();