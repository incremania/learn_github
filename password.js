const form = document.querySelector('form')
const email = document.querySelector('#username')
const errorEmail = document.querySelector('.error-username')
const forgetPassword = document.querySelector('.forget-password')

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!email.value.trim()) {
        errorEmail.innerHTML = 'please enter your email'
    }else if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorEmail.innerHTML = 'invalid email address'
    } else {
    forgetPassword.classList.add('show-link')
    errorEmail.innerHTML = ''
    }

})