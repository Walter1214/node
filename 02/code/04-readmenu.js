let fs = require('fs')

fs.readdir('/Users/walter',function (err,files){
  if(err){
    return console.log('目錄不存在')
  }
  console.log(files)
})