var express = require('express');
var app = express();
var port = 8080;

var cors = require('cors');
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/*', function (req, res, next) {
  res.header("authentication", "eyJhbGciOiJIUzI1NiJ9.eyJsLWxldiI6IkhtYWNTSEEyNTYiLCJpc3MiOiJjNjA0NGU4YS01ODQ0LTExZTYtODY2My1hMDk5OWIwOGE3N2IiLCJleHAiOjE0OTEwMzMxMDIsImp0aSI6ImUwNDcyNGJmLWU0ODAtNGVkZS1iY2IxLTM3NjY0ZWFhYmFmNiJ9.5VnZ4nRpqKv6NC2QfggkjetTm2zAVVj5zZkPteHjBrQ");
  next();
})

//登录
app.post('/dashboard/usercentre/login',function(req, res){
  var result = {
      "code": 0,  
      "detail": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDc4ODY2MTksIm5hbWUiOiJ6aGFuZ3lvbmdfbmV3IiwidXNlcl9pZCI6MX0.bOr8EL8gZJ3Wqa_PLnvfuG-U5CHoCTWaDcFwgDLk1eU" 
  }
  res.json(result);
})

//登出
app.post('/dashboard/usercentre/logout',function(req, res){
  var result = {
    "code": 0,  
    "detail": "logout success"
  }
  res.json(result);
})

//创建新镜像
app.post('/dashboard/imagecentre/myimages/newimage/build',function(req, res){
  var result = {
    "code": 0,  
    "detail": "build image started" 
  }
  res.json(result);
})

//部署新集群
app.post('/dashboard/clustercentre/clustermng/newcluster/addcluster',function(req, res){
  var result = {
    "code": 0,  
    "detail": "create new cluster success"  
  }
  res.json(result);
})

//创建新配置
app.post('/dashboard/clustercentre/configmng/newconfig/addconfig',function(req, res){
  var result = {
    "code": 0,  
    "detail": "create new config success"   
  }
  res.json(result);
})
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  var error = {
    errorCode: "500",
    errorMessage: "call api error"
  }
  res.status(500);
  res.json(error);
}

app.listen(port, function () {
  console.log('server start, listen on port ' + port);
});
