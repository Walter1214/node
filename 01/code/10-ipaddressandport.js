// port number list
// https://zh.wikipedia.org/wiki/TCP/UDP%E7%AB%AF%E5%8F%A3%E5%88%97%E8%A1%A8
let http  = require('http')
let server = http.createServer()
server.on('request', function (req,res){
  console.log('收到請求了，請求路徑是：', req.url)
  console.log('請求我的客戶端的地址是：',req.socket.remoteAddress,req.socket.remotePort)
  res.end('hello nodejs')
})

server.listen(3000,function (){
  console.log('服務器啟動成了')
})