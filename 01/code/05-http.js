let http = require('http')
let server = http.createServer()
server.on('request' ,()=>{
  console.log('接收到客戶端的請求');
})

server.listen(3000, ()=>{
  console.log('服務器啟動成功了。');
})