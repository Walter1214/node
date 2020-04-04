let bExports = require('./b')
let fs = require('fs')
console.log(bExports)
console.log(bExports.foo)
console.log(bExports.add(10,30))

fs.readFile('./a.js', function (err,data){
  if(err){
    console.log('讀取文件失敗')
  }else{
    console.log(data.toString())
  }
})
