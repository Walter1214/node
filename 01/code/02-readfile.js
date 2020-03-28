let fs = require('fs')

fs.readFile('./data/a.txt',(error,data)=>{

  //data : <Buffer 73 61 64 66 61 64 73 66 61 73 66>
  // 文件其實都是二進制數劇
  console.log('data :', data);
  console.log('error :', error);

})