let http  = require('http')
let server = http.createServer()
let fs = require('fs')
server.on('request', function (req,res){

  // Content type list https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

  let {url} = req
  if(url === '/'){
    fs.readFile('./resource/index.html', function (err,data){
      if(err){
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('file read error')
      }else{
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)
      }
    })
  }else if(url === '/head_shot.jpg'){
    fs.readFile('./resource/head_shot.jpg', function (err,data){
      if(err){
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('image read error')
      }else{
        // 圖片不需要指定編碼，編碼指的是：字符編碼
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  }
})

server.listen(3000,function (){
  console.log('Server is running')
})