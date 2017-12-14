require('hammerjs')
const fecha = require('fecha')

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('Hello world')
  console.log(fecha)

  const target = document.querySelector('.target')
  const hammertime = new Hammer(target)
  hammertime.on('panleft panright tap press', function(ev) {
    target.textContent = ev.type + ' gesture detected.'
  })
})
