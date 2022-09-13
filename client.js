const sectionEl = document.querySelector('section')


fetch('https://dateapi-app.herokuapp.com/user/all')
.then(res => res.json())
.then(data =>  {
   data.forEach(data => {
    console.log(data)
    sectionEl.innerHTML +=  ` <article>
    <h1>NUMBER <span>${data.id}</span></h1>
    <p>first Name: <span>${data.firstname}OKIKI</span></p>
    <p>last Name: <span>${data.lastname}</span></p>
    <p>date Of BIrth: <span>${data.age}</span></p>
    <p>password: <span>${data.passcode}</span></p>
    <p>email: <span>${data.email}</span></p>
    <p>income: <span>${data.income}</span></p>
    <p>gender:<span>${data.gender}</span></p>
    <p>state: <span>${data.state}</span></p>
    <p class="grant-reason-p">grant_reason:</p>
    <p class="grant-reason">${data.grant_reason}</p>
    <p>middle Name: <span>O${data.othername}</span></p>
    <p>occupation: <span>${data.occupation}</span></p>
    <p>state: <span>${data.state}</span></p>
    <p>mailing address: <span>${data.address}</span></p>
    <p>grant: <span>${data.grant}</span></p>
    <p>phone Number: <span>${data.phone}</span></p>
    <p>mailing address: <span>${data.address}</span></p>
    <p>grant: <span>${data.grant}</span></p>
  </article>`

   })
})