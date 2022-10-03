
const form =  document.querySelector('form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const passwordError = document.querySelector('.error-password')
const usernameErrror = document.querySelector('.error-username')
const login = document.querySelector('.login-btn-div')
const loader = document.querySelector('.loader')
const eye = document.querySelector('#eye')
const eyeSlash = document.querySelector('#eye-slash')


eye.addEventListener('click', function() {
    if(password.type === 'password') {
        password.type ='text'
        eye.style.display = 'none'
        eyeSlash.style.display = 'inline-block'
    }
})

eyeSlash.addEventListener('click', function() {
    if(password.type === 'text') {
        password.type ='password'
        eye.style.display = 'inline-block'
        eyeSlash.style.display = 'none'
    }
})


form.addEventListener('submit', function(e) {
     e.preventDefault()
    //  loader.style.display = 'block'

   
        if(!username.value.trim() && !password.value.trim()) {
            loader.style.display = 'block'
            setTimeout(() => {
               
                passwordError.innerHTML = 'password required'
            usernameErrror.innerHTML = 'username required'
            loader.style.display = 'none' 
            }, 2000)
           
         } else if(username.value.trim && !password.value.trim()) {
            loader.style.display = 'block'
            setTimeout(() => {
                passwordError.innerHTML = 'password required'
                usernameErrror.innerHTML = ''
                loader.style.display = 'none'
            }, 2000);
           
         } else if(!username.value.trim() && password.value.trim()) {
            loader.style.display = 'block'
            setTimeout(() => {
                passwordError.innerHTML = ''
                usernameErrror.innerHTML = 'username required'
                loader.style.display = 'none'
            }, 2000);
           
         } else if(username.value.trim() && password.value.trim()) {
            loader.style.display = 'block'
            setTimeout(() => {
                passwordError.innerHTML = ''
                usernameErrror.innerHTML = ''
                loader.style.display = 'none'
                vaidateViaServer()
            },6000)
           
         
         } else {
            
         }
    
    //  }, 2000);

    
        
})

// login.addEventListener('click', function() {
//    
// })



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
                loader.style.display = 'block'
                const token = data.access_token
                localStorage.setItem('myToken', JSON.stringify(token))
                form.submit()
            }
        })
        .catch(err => console.log(err))
        
}


