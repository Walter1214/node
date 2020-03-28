let fs = require('fs')
// 文件路徑
// 文件內容
// 回調涵數
fs.writeFile('./data/hello.md','大家好，node.js', (error)=>{
  console.log('error :', error);
})