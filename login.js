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
        password.type = 'password'
        eye.style.display = 'inline-block'
        eyeSlash.style.display = 'none'
    }
})


//  adding comment testing github
form.addEventListener('submit', async function(e) {
     e.preventDefault()
     loader.style.display = 'block'
    
    passwordError.innerHTML = ''
    usernameErrror.innerHTML = ''

   
        if(!username.value.trim() && !password.value.trim()) {
            passwordError.innerHTML = 'password required'
            usernameErrror.innerHTML = 'username required'
            loader.style.display = 'none' 
           
           
         } else if(username.value.trim && !password.value.trim()) {
                passwordError.innerHTML = 'password required'
                usernameErrror.innerHTML = ''
                loader.style.display = 'none'
         
           
         } else if(!username.value.trim() && password.value.trim()) {
                passwordError.innerHTML = ''
                usernameErrror.innerHTML = 'username required'
                loader.style.display = 'none'
      
           
         } else if(username.value.trim() && password.value.trim()) {
            try {
                const formData= new FormData(form);
                const payload = new URLSearchParams()
                for(const pair of formData) {
                    payload.append(pair[0], pair[1], pair[3])
                }
                e.preventDefault();
                const res = await fetch('https://grantb.onrender.com/login', {
                  method: 'POST',
                  body: payload
                })
          
                const data = await res.json();
                if(data._id) {
                  localStorage.setItem('userid', data._id)
                  form.submit()
                  loader.style.display = 'none'
                } 
                if(!data._id) {
                    console.log('this is an error')
                    loader.style.display = 'none'
                }
            } catch (error) {
               if(error) {
                loader.style.display = 'none'
                passwordError.innerHTML = ''
                usernameErrror.innerHTML = 'username or password incorrect'
               }
            }
           
         }       
})

