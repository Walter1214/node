let http = require('http')

let server = http.createServer()
server.on('request', function (req,res){
  let {url} = req
  if(url === '/'){
    res.end('hellow world')
  }else{
    res.end('404 not found')
  }
})

server.listen(3000,function (){
  console.log('running')
})