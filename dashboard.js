const dashboardPage = document.querySelector('.dashboard-div')

    setTimeout(function() {
       
        dashboardPage.innerHTML = ` <h3>
              Congratulations <span>firstname</span> <span>lastname</span>,
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


function paymentMethod() {
  afterPayment.classList.toggle('show-link')
}

btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
  })
})
  



