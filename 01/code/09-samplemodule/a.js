let foo = 'aaa'

console.log('a start')

function add (x,y){
  return x + y
}

require('./b')

console.log('a end')
console.log(foo)