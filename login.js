
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
        console.log('valid credential')
        vaidateViaServer()
     
     } else {
        
     }
        
})









function vaidateViaServer() {
      const formData= new FormData(form);
        const payload = new URLSearchParams()
        for(const pair of formData) {
            payload.append(pair[0], pair[1], pair[3])
            console.log(pair[0], pair[1])
        }
        console.log(...formData)
        console.log(payload)
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
                console.log(token)
                localStorage.setItem('myToken', JSON.stringify(token))
               let userLocalImage = JSON.parse(localStorage.getItem('userimage'))
               localStorage.setItem('loginImage', JSON.stringify(userLocalImage))


                // console.log(data)
                form.submit()
            }
        })
        .catch(err => console.log(err))
        
}



// const fileFormData= new FormData();
// fileFormData.append('file', userFile, 'user-file.jpg')
// const payload = new URLSearchParams()
// let token = JSON.parse(localStorage.getItem('myToken'))


// for(const pair of fileFormData) {
//     payload.append(pair[0], pair[1])
//     console.log(pair[0], pair[1])
// }
// console.log(...formData)
// console.log(payload)
// fetch('https://dateapi-app.herokuapp.com/image/', {
//     method: 'POST',
//     body: payload,
//     headers: {
//         'Authentication': `Bearer ${token}`
//     }
   
// })
// .then((res) => res.json()) 
// .then((data) => {
//   console.log(data)
  
// })
// .catch(err => console.log(err))



