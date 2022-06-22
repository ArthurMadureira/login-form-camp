const label = document.querySelector('.checkbox')
const rect = document.querySelector('.rect')
function check() {

  rect.classList.toggle('check')
}

const eye = document.querySelector('.eye')

const passwordInput = document.querySelector('input[type="password"]')
eye.addEventListener('click', () => {

  if(passwordInput.getAttribute('type') == 'password') {
    passwordInput.setAttribute('type', 'text')
  } else {
    passwordInput.setAttribute('type', 'password')
  }

})