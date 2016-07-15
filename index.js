'use strict';

var app = require(__dirname + '/server/server')(true);
    
var logging = true
    , https = require('https')
    , http = require('http')
    , sslOptions;

var port = process.env.GIS_PORT || 3000;
var host = process.env.GIS_HOST || undefined;
var server; 

if (sslOptions) {
  server = https.createServer(sslOptions, app);
}else{
  server = http.createServer(app);
}

server.listen(port, host, function() {
    console.log("listening on port " + port);
});