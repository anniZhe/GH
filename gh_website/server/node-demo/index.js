// 引入express中间件
var express = require('express')
var path = require('path')
var app = express()
app.use(express.static(path.resolve('.') + '/dist')) // 设置静态文件目录
app.get('/', function (req, res) {
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为 127.0.0.1', host, port)
})
