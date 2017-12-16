const fs = require('fs')
let str = ''
str = fs.readFileSync('node_modules/interpret/index.js').toString('utf-8')
str = str.replace(/@babel\/register/g, 'babel-register')
// console.log(str)
fs.writeFile('node_modules/interpret/index.js', str, function(err){
  if (err) {
    console.log(err)
  }
  // console.log('file saved!')
})