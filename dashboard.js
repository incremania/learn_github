const dashboardPage = document.querySelector('.dashboard-div')

    setTimeout(function() {
       
        dashboardPage.innerHTML = ` <h3>Congratulations <span>firstname</span> <span>lastname</span>,</h3>
        <div class="winning-message-div">
          <p class="greeting-text hide-text winning-message">
            Yep, that's right. Congrats
            <span class="firstname">firstname</span>
            <span class="lastname">lastname</span>, You have been luckily
            selected as part of our winner for
            <span class="grant-won-date">november 21 2010</span>. We have
            thousands of applications daily but We only pick few winner(s) in
            a day. Your patience just paid off. You just won a grant of
            $<span>100,000</span>! Your application has been successfully
            approved by the US Federal Emergency Management Agency; wait no
            longer. Simply text the administrative number with your grant code
            on how to receive your funds. Grant code: 181799 Congratulations
            once again <span class="firstname">firstname</span>
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
      
        <div class="amount-won-div">
          <h3 class="amount-text">
            Grant amount: $<span class="amount-won">23,000</span>
          </h3>
        </div>`
      }, 7000)
