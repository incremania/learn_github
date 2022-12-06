const dashboardPage = document.querySelector('.dashboard-div')
const afterPayment = document.querySelector('.after-payment');
const claimBtn = document.querySelector('.claim-payment-btn')
const btns = document.querySelectorAll('.btn')
const  firstName = document.querySelectorAll('.firstname')
const lastName = document.querySelectorAll('.lastname')
const firstAmount = document.querySelector('.first-amount')
const secondAmount = document.querySelector('.second-amount') 
const grantId = document.querySelector('.grantid')
const amoutWon = document.querySelector('.amount-won')
const amountWonTwo = document.querySelector('.amount-won-span')
const amountWonBtn = document.querySelector('.amount-won-btn-span')
const text = document.querySelector('.greeting-text')
const beforeTwoHours = document.querySelector('.before-two-hrs')
const afterTwoHours = document.querySelector('.after-two-hrs')
const preloader = document.querySelector('.preloader')
const userId = document.querySelector('.user-id')
const profileName1 = document.querySelector('.profile-name-one')
const profileId1 = document.querySelector('.profile-id-one')
const profileEmail1 = document.querySelector('.profile-email-one')
const profileAddress1 = document.querySelector('.profile-address-one')
const profileName2 = document.querySelector('.profile-name-two')
const profileId2 = document.querySelector('.profile-id-two')
const profileEmail2 = document.querySelector('.profile-email-two')
const profileAddress2 = document.querySelector('.profile-address-two')


claimBtn.addEventListener('click', function(e) {
  e.preventDefault()
  afterPayment.classList.toggle('show')

})

//  get user details
let url = 'https://date-apps.onrender.com/user/'
let h = new Headers()
const token = JSON.parse(localStorage.getItem('myToken'))

h.append('Authorization', `Bearer ${token}`)
h.append('Accept', 'applciation/json')

let response = fetch(url, {
  method: 'GET',
  headers: h  
})
.then(res =>  res.json()) 
.then(data =>  {
  
  firstName.forEach(first => {
    first.innerHTML = data.firstname.toUpperCase()
  })
  lastName.forEach(last => {
    last.innerHTML = data.lastname.toUpperCase()
  })


  let figureWon = Number(data.grant) + 2245
  const figureWonString = String(figureWon)
  const figureBeforeComa = figureWonString.slice(0,2)
  const figureAfterComa = figureWonString.slice(2)
  const  figureBeforeComa1 = figureWonString.slice(0,3)
  const figureAfterComa1 = figureWonString.slice(3)
  amoutWon.innerHTML = Number(data.grant) + 2245 
  if(figureWonString.length === 5) {
    amountWonTwo.innerHTML =  figureBeforeComa + ',' + figureAfterComa 
    amountWonBtn.innerHTML =  figureBeforeComa + ',' + figureAfterComa 
    amoutWon.innerHTML  = figureBeforeComa + ',' + figureAfterComa
  } else if(figureWonString.length === 6){
    amountWonTwo.innerHTML =   figureBeforeComa1 + ',' + figureAfterComa1 
    amountWonBtn.innerHTML =  figureBeforeComa1 + ',' + figureAfterComa1
    amoutWon.innerHTML  = figureBeforeComa1 + ',' + figureAfterComa1
  }
  
  if(String(data.id).length=== 1) {
    grantId.innerHTML = '56912' + data.id
    userId.innerHTML = '56912'+ data.id
    profileId1.innerHTML = '56912'+ data.id
    profileId2.innerHTML = '56912'+ data.id
  } else if(String(data.id).length === 2) {
    grantId.innerHTML = '9861' + data.id
    userId.innerHTML = '9861'+ data.id
    profileId1.innerHTML = '9861'+ data.id
    profileId2.innerHTML = '9861'+ data.id
  } else if(String(data.id).length) {
    grantId.innerHTML = '380' + data.id
    userId.innerHTML = '380'+ data.id
    profileId1.innerHTML = '380' + data.id
    profileId2.innerHTML = '380' + data.id
  } else if(String(data.id).length === 4) {
    grantId.innerHTML = '81' + data.id
    userId.innerHTML ='81'+ data.id
    profileId1.innerHTML = '81'+ data.id
    profileId2.innerHTML = '81'+ data.id
  } else if(String(data.id).length === 5) {
    grantId.innerHTML = '7' + data.id
    userId.innerHTML = '7'+ data.id
    profileId1.innerHTML = '7'+ data.id
    profileId2.innerHTML = '7'+ data.id
  } else {
    grantId.innerHTML = '498349'
    userId.innerHTML =  '498349'
    profileId1.innerHTML = '498349'
    profileId2.innerHTML = '498349'
  }
  
 


profileName1.innerHTML = data.firstname + ' ' + data.othername + ' ' + data.lastname
profileName2.innerHTML = data.firstname + ' ' + data.othername + ' ' + data.lastname
profileEmail1.innerHTML = data.email
profileEmail2.innerHTML = data.email
 firstAmount.innerHTML = data.grant
 secondAmount.innerHTML = Number(data.grant) + 4000
})



//  time lag diisplay after 2hrs
let url3 = 'https://date-apps.onrender.com/user/time'
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

// const file = document.querySelector('#file')
// let form = document.querySelector('form')
// form.addEventListener('submit', function(e) {

//   e.preventDefault()

// let userFile = file.files[0]
// console.log(userFile)
// const fileFormData = new FormData()
// fileFormData.append('uploaded_file', userFile)
// fetch('https://date-apps.onrender.com/image/', {

//   method: "POST",
//    headers: {
//     'Authorization': `Bearer ${token}`
//    },
//    body: fileFormData

// }).then(res => res.json())
// .then(data2 =>  {
//   // console.log(data2.image_url)
//   // console.log(data2)
  
// })
// .catch(err => console.log(err))


// })



// const logOut = document.querySelector('.logout-link')
// logOut.addEventListener('click', function(e) {
//   // e.preventDefault()
//   localStorage.removeItem('myToken')
// })
// const img = document.querySelector('.user-img')
// fetch('https://date-apps.onrender.com/image/', {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ${token}`
//   }

// })
// .then(res => res.json())
// .then(data => {
//   console.log(data)
//   img.src = data[0].image_url
//   console.log(data[0].image_url)
// console.log(img.src.length)
// console.log(img.src)
  
//   if(img.src.length > 11) {
//     form.classList.add('hide')
//   } 


// })
// .catch(error => console.log(error))

//   console.log(img.src);
//   console.log(img.src.length)

