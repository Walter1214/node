let http = require('http')
let server = http.createServer()
server.on('request', (req,res)=>{
  console.log('收到請求，請求路徑是：' + req.url);
  let {url} = req
  console.log('請求我的客戶端的端口號是：',req.socket.remoteAddress, req.socket.remotePort)
  if(url === '/') {
    res.end('index page')
  }else if (url === '/login'){
    res.end('login page')
  }else if(url === '/products'){
    const products = [
      {id:1,name:'test'},
      {id:1,name:'test'},
      {id:1,name:'test'}
    ]
    res.end(JSON.stringify(products))
  }else{
    res.end('404 Not Found')
  }


  // if(url === '/') {
  //   res.end(JSON.stringify(products))
  // }
})

server.listen(8000, ()=>{
  console.log('服務器啟動成功');
})