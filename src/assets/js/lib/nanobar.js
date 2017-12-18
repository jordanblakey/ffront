// NANOBAR: Very lightweight progress bars /////////////////////////////////////
// http://nanobar.jacoborus.codes/

import Nanobar from 'nanobar'
const progress = new Nanobar({ id: 'nanobar' })

// EXAMPLE /////////////////////////////////////////////////////////////////////
let p = 0
const button = document.getElementById('nanobar-button')

if (button !== null) {
  button.addEventListener('click', function() {
    if (p < 100) {
      p += 10
      progress.go(p)
    } else {
      p = 0
    }
  })
}

export { Nanobar }