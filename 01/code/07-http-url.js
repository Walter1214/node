let http = require('http')
let server = http.createServer()
server.on('request', (req,res)=>{
  console.log('收到請求，請求路徑是：' + req.url);
  let {url} = req
  // if(url === '/') {
  //   res.end('index page')
  // }else if (url === '/login'){
  //   res.end('login page')
  // }else{
  //   res.end('404 Not Found')
  // }

  const products = [
    {id:1,name:'test'},
    {id:1,name:'test'},
    {id:1,name:'test'}
  ]
  if(url === '/') {
    res.end(JSON.stringify(products))
  }
})

server.listen(80, ()=>{
  console.log('服務器啟動成功');
})