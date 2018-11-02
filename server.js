var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  var location = process.env.PATCH_LOCATION || 'ocean';
  fs.readFile(location + '.html', function(err, data){
    console.log("data: ", data);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
}).listen(8000);
