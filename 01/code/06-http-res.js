let http = require('http')
let server = http.createServer()

// Request
//  請求對象可以用來取得客戶端的信息
// Response
//  響應對象可以用來給客戶端消息

server.on('request' ,(request,response)=>{

  // Request
  console.log('客戶接收' + request.url);

  // Response
  response.write('hello')
  response.write('node.js')
  //
  response.end()
})

server.listen(3000, ()=>{
  console.log('服務器啟動成功了。');
})