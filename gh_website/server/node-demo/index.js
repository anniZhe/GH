// 引入express中间件
var express = require('express')
var app = express()
// eslint-disable-next-line no-path-concat
app.use(express.static(__dirname + 'dist')) // 设置静态文件目录
// app.use(express.static('../../dist'))
app.get('/', function (req, res) {
})
app.get('/nodeDemo', function (req, res) {
  res.send('用户列表页面')
})

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为 127.0.0.1', host, port)
})
