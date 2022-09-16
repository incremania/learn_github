const dashboardPage = document.querySelector('.dashboard-div')
const afterPayment = document.querySelector('.after-payment');
const claimBtn = document.querySelector('.claim-payment-btn')
const btns = document.querySelectorAll('.btn')
const  firstName = document.querySelectorAll('.firstname')
const lastName = document.querySelectorAll('.lastname')
const firstAmount = document.querySelector('.first-amount')
const secondAmount = document.querySelector('.second-amount') 
console.log(firstAmount, secondAmount)
const grantId = document.querySelector('.grantid')
const amoutWon = document.querySelector('.amount-won')
const amountWonTwo = document.querySelector('.amount-won-span')
const amountWonBtn = document.querySelector('.amount-won-btn-span')
const text = document.querySelector('.greeting-text')
const beforeTwoHours = document.querySelector('.before-two-hrs')
const afterTwoHours = document.querySelector('.after-two-hrs')
const preloader = document.querySelector('.preloader')

function paymentMethod() {
  afterPayment.classList.toggle('show-link')
}

// btns.forEach(btn => {
//   console.log(btn)
//   btn.addEventListener('click', function(e) {
//     e.preventDefault()
//   })
// })

//  get user details
let url = 'https://dateapi-app.herokuapp.com/user/'
let h = new Headers()
const token = JSON.parse(localStorage.getItem('myToken'))
console.log(token)
h.append('Authorization', `Bearer ${token}`)
h.append('Accept', 'applciation/json')

let response = fetch(url, {
  method: 'GET',
  headers: h
  
})
.then(res =>  res.json()) 
.then(data =>  {
  console.log(data)
  firstName.forEach(first => {
    first.innerHTML = data.firstname
  })
  lastName.forEach(last => {
    last.innerHTML = data.lastname
  })

if(data.gender == 'female' && data.firstname.length < 6 ) {
  grantId.innerHTML = 345685 
} else if(data.gender == 'female' && data.firstname.length >= 6) {
  grantId.innerHTML = 451290
}  else if(data.gender == 'male' && data.lastname.length < 6) {
  grantId.innerHTML = 456784
} else if(data.gender == 'male' && data.firstname.length >= 6) {
  grantId.innerHTML = 930154
} else {
  grantId.innerHTML = 569813
}
  let figureWon = Number(data.grant) + 2245
  const figureWonString = String(figureWon)
  const figureBeforeComa = figureWonString.slice(0,2)
  const figureAfterComa = figureWonString.slice(2)
  const  figureBeforeComa1 = figureWonString.slice(0,3)
  const figureAfterComa1 = figureWonString.slice(3)
  amoutWon.innerHTML = Number(data.grant) + 2245 
  console.log(figureWonString.length)
  if(figureWonString.length === 5) {
    amountWonTwo.innerHTML =  figureBeforeComa + ',' + figureAfterComa 
    amountWonBtn.innerHTML =  figureBeforeComa + ',' + figureAfterComa 
    amoutWon.innerHTML  = figureBeforeComa + ',' + figureAfterComa
  } else if(figureWonString.length === 6){
    amountWonTwo.innerHTML =   figureBeforeComa1 + ',' + figureAfterComa1 
    amountWonBtn.innerHTML =  figureBeforeComa1 + ',' + figureAfterComa1
    amoutWon.innerHTML  = figureBeforeComa1 + ',' + figureAfterComa1
  }
  



 firstAmount.innerHTML = data.grant
 secondAmount.innerHTML = Number(data.grant) + 4000

})



//  time lag diisplay after 2hrs

let url3 = 'https://dateapi-app.herokuapp.com/user/time'
let h3 = new Headers()
h3.append('Authorization', `Bearer ${token}`)
h3.append('Accept', 'application/json')
h3.append('Content-Type', 'application/json')
try {
  let response2 = fetch(url3, {
    method: 'POST',
    headers: h3
  })
  .then(res2 => res2.json())
  .then(data3 => {
    console.log(data3)
    if(data3 === true) {
     beforeTwoHours.classList.add('hide')
     afterTwoHours.classList.add('show')
     preloader.classList.add('hide')
    }  else if(data3 === false ) {
      beforeTwoHours.classList.add('show')
      afterTwoHours.classList.add('hide')
      preloader.classList.add('hide')
    } else {
      preloader.classList.add('show')
      beforeTwoHours.classList.add('hide')
      afterTwoHours.classList.add('hide')
      preloader.classList.add('hide')
    }

   

  })
} catch (error) {
  console.log(error)
}

const file = document.querySelector('#file')
let form = document.querySelector('form')
form.addEventListener('submit', function(e) {

  e.preventDefault()

let userFile = file.files[0]
console.log(userFile)
const fileFormData = new FormData()
fileFormData.append('uploaded_file', userFile)
fetch('https://dateapi-app.herokuapp.com/image/', {
  method: "POST",
   headers: {
    'Authorization': `Bearer ${token}`
   },
   body: fileFormData

}).then(res => res.json())
.then(data2 =>  {
  console.log(data2.image_url)
  console.log(data2)
  
})
.catch(err => console.log(err))


})



const logOut = document.querySelector('.logout-link')
logOut.addEventListener('click', function(e) {
  // e.preventDefault()
  localStorage.removeItem('myToken')
})
const img = document.querySelector('.user-img')
const imgFooter = document.querySelector('.user-img-footer')
fetch('https://dateapi-app.herokuapp.com/image/', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }

})
.then(res => res.json())
.then(data => {
  console.log(data)
  img.src = data[0].image_url
  // imgFooter.src = data[0].image_url
  if(img.src.length > 12) {
    form.classList.add('hide')
    // location.reload()
    console.log(form)
  }

})
.catch(error => console.log(error))