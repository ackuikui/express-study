var http = require("http");
var url = require("url");
var querystring = require('querystring');
var util = require('util');

const router = require("./router");


http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname; // path

    var reqGetData = url.parse(request.url,true).query // get
    
    var reqPostData = "";
    request.on("data",function(data){
        reqPostData += data;
    });

    response.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*', // http://localhost:52330
    });

    request.on('end', function () {
        reqPostData = querystring.parse(reqPostData);
        var respJson = router.route(pathname, reqPostData)
        
        response.end(JSON.stringify(respJson));
    });

}).listen(8080);


console.log('Server running at http://127.0.0.1:8080/');