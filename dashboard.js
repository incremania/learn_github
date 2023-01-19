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
const userImg = document.querySelector('.user-img');




claimBtn.addEventListener('click', function(e) {
  e.preventDefault()
  afterPayment.classList.toggle('show')

})

const getUser = async () => {
  const userIdLocal = localStorage.getItem("userid");
  if(userIdLocal) {
  let url = `https://grantb.onrender.com/user/${userIdLocal}`
  const res = await fetch(url, {});
  const data = await res.json();
  console.log(data)

  firstName.forEach(first => {
    first.innerHTML = data.firstname.toUpperCase()
  })
  lastName.forEach(last => {
    last.innerHTML = data.lastname.toUpperCase()
  })
  
  let figureWon = Number(data.amount) + 2245
  const figureWonString = String(figureWon)
  const figureBeforeComa = figureWonString.slice(0,2)
  const figureAfterComa = figureWonString.slice(2)
  const  figureBeforeComa1 = figureWonString.slice(0,3)
  const figureAfterComa1 = figureWonString.slice(3)
  amoutWon.innerHTML = Number(data.amount) + 2245 
  if(figureWonString.length === 5) {
    amountWonTwo.innerHTML =  figureBeforeComa + ',' + figureAfterComa 
    amountWonBtn.innerHTML =  figureBeforeComa + ',' + figureAfterComa 
    amoutWon.innerHTML  = figureBeforeComa + ',' + figureAfterComa
  } else if(figureWonString.length === 6){
    amountWonTwo.innerHTML =   figureBeforeComa1 + ',' + figureAfterComa1 
    amountWonBtn.innerHTML =  figureBeforeComa1 + ',' + figureAfterComa1
    amoutWon.innerHTML  = figureBeforeComa1 + ',' + figureAfterComa1
  }


    grantId.innerHTML = data._id.slice(12, 18)
    userId.innerHTML = data._id.slice(12, 18)
    profileId1.innerHTML = data._id.slice(12, 18)
    profileId2.innerHTML = data._id.slice(12, 18)
    userImg.src = data.image.url

profileName1.innerHTML = data.firstname + ' ' + data.othername + ' ' + data.lastname
profileName2.innerHTML = data.firstname + ' ' + data.othername + ' ' + data.lastname
profileEmail1.innerHTML = data.username
profileEmail2.innerHTML = data.username
 firstAmount.innerHTML = data.amount
 secondAmount.innerHTML = Number(data.amount) + 4000

 if(data.isApproved === true) {
  beforeTwoHours.classList.add('hide')
  afterTwoHours.classList.add('show')
  preloader.classList.add('hide')
  }  else if(data.isApproved === false ) {
   beforeTwoHours.classList.add('show')
   afterTwoHours.classList.add('hide')
   preloader.classList.add('hide')
  } else {
   preloader.classList.add('show')
   beforeTwoHours.classList.add('hide')
   afterTwoHours.classList.add('hide')
   preloader.classList.add('hide')
  }

 }
}
getUser()

const logOut = document.querySelector('.logout-link')
logOut.addEventListener('click', function(e) {
  // e.preventDefault()
  localStorage.removeItem('userid')
})

  
