let foo = 'bbb'
exports.foo = 'hello'
exports.add = function (x,y){
  return x+y
}

exports.readFile - function (path,callback){
  console.log('文件路徑',path)
}

function add (x,y){
  return x-y
}