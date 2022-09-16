
const form =  document.querySelector('form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const passwordError = document.querySelector('.error-password')
const usernameErrror = document.querySelector('.error-username')

form.addEventListener('submit', function(e) {
     e.preventDefault()
     if(!username.value.trim() && !password.value.trim()) {
        passwordError.innerHTML = 'password required'
        usernameErrror.innerHTML = 'username required'
     } else if(username.value.trim && !password.value.trim()) {
        passwordError.innerHTML = 'password required'
        usernameErrror.innerHTML = ''
     } else if(!username.value.trim() && password.value.trim()) {
        passwordError.innerHTML = ''
        usernameErrror.innerHTML = 'username required'
     } else if(username.value.trim() && password.value.trim()) {
        passwordError.innerHTML = ''
        usernameErrror.innerHTML = ''
        vaidateViaServer()
     
     } else {
        
     }
        
})



function vaidateViaServer() {
      const formData= new FormData(form);
        const payload = new URLSearchParams()
        for(const pair of formData) {
            payload.append(pair[0], pair[1], pair[3])
        }
        fetch('https://dateapi-app.herokuapp.com/login/', {
            method: 'POST',
            body: payload
        })
        .then((res) => res.json()) 
        .then((data) => {
            if(data.detail == 'Invalid Credentials') {
                passwordError.innerHTML = 'username or password incorrect'
            } else {
                const token = data.access_token
                localStorage.setItem('myToken', JSON.stringify(token))
                form.submit()
            }
        })
        .catch(err => console.log(err))
        
}


