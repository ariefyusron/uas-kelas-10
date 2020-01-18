const username = document.getElementById('username')
const password = document.getElementById('password')
const buttonLogin = document.getElementById('login')
const message = document.getElementById('message')

function login() {
  if(username.value === 'ariefyusron'){
    if(password.value === '123456'){
      window.location.href = 'detail.html'
    } else {
      message.innerHTML = 'password salah!'
    }
  } else {
    message.innerHTML = 'username salah!'
  }
}

buttonLogin.addEventListener('click',login)