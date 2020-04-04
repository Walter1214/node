let http  = require('http')
let server = http.createServer()
server.on('request',function (req,res){
  // 默認發送數據是utf-8
  // 但是Browser is not know you are utf-8
  // 中文操作系默認是gbk
  // 解決方法就是正確的告訴Broswer 內容是什麼編碼
  // Content-Type 告訴對方你發送的數據是什麼類型


  let url = req.url
if (url === '/plain'){
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('hello 世界')
}else if(url === '/html'){
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('<p>hello html<a href="">點我</a></p>')
}

})

server.listen(3000, function (){
  console.log('Server is running')
})