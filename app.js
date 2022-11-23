const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3001);

app.get('/', function(request, response){
  response.sendFile(process.cwd() +'/index.html');
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Vulnerable web server listening on port ' + app.get('port'));
});
