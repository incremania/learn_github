const firstForm = document.querySelector('.first-form')
const secondForm = document.querySelector('.second-form')

// form validation

const firstName = document.querySelector('#first-name');
const errorFirstName = document.querySelector('.error-firstname')
const lastName = document.querySelector('#last-name')
const errorLastName = document.querySelector('.error-lastname')
const income = document.querySelector('#income')
const errorIncome = document.querySelector('.error-income')
const age = document.querySelector('#age')
const errorAge= document.querySelector('.error-age')
const city = document.querySelector('#city')
const errorCity= document.querySelector('.error-city')
const creditScore = document.querySelector('#credit-score')
const errorCreditScore= document.querySelector('.error-credit-score')
const file = document.querySelector('#file')
const errorFile = document.querySelector('.error-file')
const phoneNumber = document.querySelector('#number')
const errorPhoneNumber = document.querySelector('.error-phone-number')
const email = document.querySelector('#email')
const errorEmail = document.querySelector('.error-email')
const mailingAddress = document.querySelector('#mailingaddress')
const errorMailingAddress = document.querySelector('.error-mailing-address')
const textArea = document.querySelector('#reason')
const errorTextArea = document.querySelector('.error-reason')
const continueBtn = document.querySelector('.continue')
const loginEmail = document.querySelector('#login-email')
const errorLoginEmail = document.querySelector('.error-login-email')
const loginPasswordOne = document.querySelector('#login-password-one')
const errorPasswordOne= document.querySelector('.error-password-one')
const loginPasswordTwo = document.querySelector('#login-password-two')
const errorPasswordTwo = document.querySelector('.error-password-two')

const signUpForm = document.querySelector('.signup-form')




loginEmail.addEventListener('keyup' ,function() {
    
    loginEmailValidation()
})

signUpForm.addEventListener('submit', function(e) {
    e.preventDefault()

    
  const loginEmailValid = loginEmail.classList.contains('valid-border')
  const passwordOneValid = loginPasswordOne.classList.contains('valid-border')
  const passwordTwoValid = loginPasswordTwo.classList.contains('valid-border')

  if(loginEmailValid && passwordOneValid && passwordTwoValid) {
    alert('sign in to dashboard')
  } else {
    loginEmailValidation()
    passwordMatch()
    passwordValidation(loginPasswordOne, errorPasswordOne)
    validatePasswordTwo()
    passwordValidation(loginPasswordTwo, errorPasswordTwo)
  }
    


})

//  continuing to next form

continueBtn.addEventListener('click', function(e) {
  e.preventDefault()
  creditScoreValidation()
  fileValidation()
  ageValidation()
  emailValidation(email, errorEmail, 'error', 'invalid error')
  validation(city, errorCity, 'this field cannot be empty', 'invalid state format')
  validation(firstName, errorFirstName, 'first name cannot be empty', 'invalid first name format')
  validation(lastName, errorLastName, 'last name cannot be empty', 'invalid last name format')
  incomeValidation(income, errorIncome, 'this field cannot be empty', 'numbers only')
  numberValidation(phoneNumber, errorPhoneNumber, 'phone number cannot be empty', 'input a valid number')
  textAreaValidation()
  const firstNameValid = firstName.classList.contains('valid-border')
  const lastNameValid  = lastName.classList.contains('valid-border')
  const creditScoreValid = creditScore.classList.contains('valid-border')
  const fileValid = file.classList.contains('valid-border')
  const ageValid = age.classList.contains('valid-border');
  const cityValid = city.classList.contains('valid-border');
  const phoneNumberValid = phoneNumber.classList.contains('valid-border');
  const incomeValid = income.classList.contains('valid-border')
  const mailingAddressValid = mailingAddress.classList.contains('valid-border')
  const textAreaValid = textArea.classList.contains('valid-border')

 
//   firstNameValid && occupationValid && ageValid && phoneNumberValid && lastNameValid && creditScoreValid && fileValid &&  cityValid

  if(firstNameValid && mailingAddressValid && textAreaValid &&incomeValid && ageValid && phoneNumberValid && lastNameValid && creditScoreValid && fileValid &&  cityValid) {
    // if(!firstNameValid) {
   firstForm.classList.add('hide-form')
     secondForm.classList.remove('hide-form')
   } else {
    creditScoreValidation()
    fileValidation()
    ageValidation()
    emailValidation()
    mailingAddressValiddation(mailingAddress, errorMailingAddress, 'mailing address cannot be empty')
   validation(city, errorCity, 'this field cannot be empty', 'invalid city format')
   validation(firstName, errorFirstName, 'first name cannot be empty', 'invalid first name format')
    validation(lastName, errorLastName, 'last name cannot be empty', 'invalid last name format')
    validation(income, errorIncome, 'this field cannot be empty', 'input a valid income')
 incomeValidation(phoneNumber, errorPhoneNumber, 'phone number cannot be empty', 'input a valid number')
 setTimeout(function(){
    alert('please make sure all fields all filled and try again')
 },1000)
}
 

})




// all numbers validation
phoneNumber.addEventListener('keyup', function() {
      
     numberValidation(phoneNumber, errorPhoneNumber, 'phone number cannot be empty', 'input a valid number')
   
})

creditScore.addEventListener('keyup', function() {
   creditScoreValidation()

})



//letters validation
firstName.addEventListener('keyup', function() {
    validation(firstName, errorFirstName, 'first name cannot be empty', 'invalid first name format')
})

lastName.addEventListener('keyup', function() {
    
    validation(lastName, errorLastName, 'last name cannot be empty', 'invalid last name format')
})

income.addEventListener('keyup', function() {
    incomeValidation(income, errorIncome, 'this field cannot be empty', 'input a valid income')
})

city.addEventListener('keyup', function() {
    validation(city, errorCity, 'this field cannot be empty', 'invalid state format')
})

file.addEventListener('blur', function() {
    fileValidation()
})

age.addEventListener('blur', function()
 {
   ageValidation()
})

mailingAddress.addEventListener('keyup', function(){
    mailingAddressValiddation(mailingAddress, errorMailingAddress,'mailing address is required')
})



function numberValidation(inputName, errorName, firstMessage, secondMessage) {
    const invalidIcon = inputName.parentElement.querySelector('.invalid-icon')
    const validIcon = inputName.parentElement.querySelector('.valid-icon')

    if(!inputName.value.trim())  {
        inputName.classList.add('invalid-border')
        inputName.classList.remove('valid-border')
        errorName.innerHTML = firstMessage
        errorName.classList.add('invalid')
        invalidIcon.classList.add('not-success-icon')
        validIcon.classList.remove('success-icon')
        return false    
        // /(?:(\+1)[ -])?\(?(\d{3})?[ -]?(\d{3})[ -]?(\d{4})/
    } else if(!inputName.value.match(/(?:(\+1)[ -])?\(?(\d{3})?[ -]?(\d{3})[ -]?(\d{4})/) ) {
        errorName.innerHTML = secondMessage
        errorName.classList.add('invalid')
        inputName.classList.remove('valid-border')
        inputName.classList.add('invalid-border')
        invalidIcon.classList.add('not-success-icon')

        validIcon.classList.remove('success-icon')
        return false
    }
    else {
        errorName.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        inputName.classList.remove('invalid-border')
        inputName.classList.add('valid-border')
        return true
    }

}

function validation(inputName, errorName, firstMessage, secondMessage) {
    const invalidIcon = inputName.parentElement.querySelector('.invalid-icon')
    const validIcon = inputName.parentElement.querySelector('.valid-icon')

    if(!inputName.value.trim())  {
        inputName.classList.add('invalid-border')
        inputName.classList.remove('valid-border')
        errorName.innerHTML = firstMessage
        errorName.classList.add('invalid')
        invalidIcon.classList.add('not-success-icon')
        validIcon.classList.remove('success-icon')  
        return true
    
    } else if(!inputName.value.match(/^[A-Za-z\s]*$/ )) {
        errorName.innerHTML = secondMessage
        errorName.classList.add('invalid')
        inputName.classList.remove('valid-border')
        inputName.classList.add('invalid-border')
        invalidIcon.classList.add('not-success-icon')

        validIcon.classList.remove('success-icon')
        return true
    }
    else {
        errorName.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        inputName.classList.remove('invalid-border')
        inputName.classList.add('valid-border')
     return false
    }
}


function creditScoreValidation() {
    const invalidIcon = creditScore.parentElement.querySelector('.invalid-icon')
    const validIcon = creditScore.parentElement.querySelector('.valid-icon')
   if(!creditScore.value.match(/^[0-9]+$/) || creditScore.value > 850 || creditScore.value.length < 3) {
        errorCreditScore.innerHTML = 'invalid credit score'
        errorCreditScore.classList.add('invalid')
        creditScore.classList.remove('valid-border')
        creditScore.classList.add('invalid-border')
        invalidIcon.classList.add('not-success-icon')

        validIcon.classList.remove('success-icon')
    } else {
        errorCreditScore.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        creditScore.classList.remove('invalid-border')
        creditScore.classList.add('valid-border')
    }
}

function fileValidation() {
   
    const invalidIcon = file.parentElement.querySelector('.invalid-icon')
    const validIcon = file.parentElement.querySelector('.valid-icon')
    if(file.value.length == 0)  {
        validIcon.classList.remove('success-icon')
        invalidIcon.classList.add('not-success-icon')
        file.classList.add('invalid-border')
        file.classList.remove('valid-border')
        errorFile.innerHTML = 'upload a photo'
        errorFile.classList.add('invalid')
         

    } 
    else {
        errorFile.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        file.classList.remove('invalid-border')
        file.classList.add('valid-border')

    }
}

function ageValidation() {
    if(age.value == '') {
        age.classList.add('invalid-border')
        age.classList.remove('valid-border')
        errorAge.innerHTML = 'select a valid age'
        age.classList.add('invalid')
        errorAge.style.color = 'red'
       
        return false  
    } else if(age.value.length > 1) {
        errorAge.innerHTML = ''
        age.classList.remove('invalid-border')
        age.classList.add('valid-border')
        age.style.color = 'black'
        return true
    }
}

email.addEventListener('keyup', function() {
    emailValidation()
})

// mailing address validation
function mailingAddressValiddation(inputName, errorName, firstMessage) {
    const invalidIcon = inputName.parentElement.querySelector('.invalid-icon')
    const validIcon = inputName.parentElement.querySelector('.valid-icon')
    if(!mailingAddress.value.trim()) {
        inputName.classList.add('invalid-border')
        inputName.classList.remove('valid-border')
        errorName.innerHTML = firstMessage
        errorName.classList.add('invalid')
        invalidIcon.classList.add('not-success-icon')
        validIcon.classList.remove('success-icon')
    } else {
        errorName.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        inputName.classList.remove('invalid-border')
        inputName.classList.add('valid-border')
        return true
    }
}

function incomeValidation(inputName, errorName, firstMessage,secondMessage){
    const invalidIcon = inputName.parentElement.querySelector('.invalid-icon')
    const validIcon = inputName.parentElement.querySelector('.valid-icon')

    if(!inputName.value.trim())  {
        inputName.classList.add('invalid-border')
        inputName.classList.remove('valid-border')
        errorName.innerHTML = firstMessage
        errorName.classList.add('invalid')
        invalidIcon.classList.add('not-success-icon')
        validIcon.classList.remove('success-icon')  
        return true
    
    } 
    else if(inputName.value.length < 3) {
        errorName.innerHTML = secondMessage
        errorName.classList.add('invalid')
        inputName.classList.remove('valid-border')
        inputName.classList.add('invalid-border')
        invalidIcon.classList.add('not-success-icon')

        validIcon.classList.remove('success-icon')
        return true
    }
    else {
        errorName.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        inputName.classList.remove('invalid-border')
        inputName.classList.add('valid-border')
     return false
    }
}


function loginEmailValidation() {
    const invalidIcon = loginEmail.parentElement.querySelector('.invalid-icon')
    const validIcon = loginEmail.parentElement.querySelector('.valid-icon')

    if(!loginEmail.value.trim())  {
        loginEmail.classList.add('invalid-border')
        loginEmail.classList.remove('valid-border')
        errorLoginEmail.innerHTML = 'email field cannot be empty'
        errorLoginEmail.classList.add('invalid')
        invalidIcon.classList.add('not-success-icon')
        validIcon.classList.remove('success-icon')  
        return true
    
    } else if(!loginEmail.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorLoginEmail.innerHTML = 'invalid email format'
        errorLoginEmail.classList.add('invalid')
        loginEmail.classList.remove('valid-border')
        loginEmail.classList.add('invalid-border')
        invalidIcon.classList.add('not-success-icon')

        validIcon.classList.remove('success-icon')
        return true
    }
    else {
        errorLoginEmail.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        loginEmail.classList.remove('invalid-border')
        loginEmail.classList.add('valid-border')
     return false
    }
}

function emailValidation() {
    const invalidIcon = email.parentElement.querySelector('.invalid-icon')
    const validIcon = email.parentElement.querySelector('.valid-icon')

    if(!email.value.trim())  {
        email.classList.add('invalid-border')
        email.classList.remove('valid-border')
        errorEmail.innerHTML = 'email field cannot be empty'
        errorEmail.classList.add('invalid')
        invalidIcon.classList.add('not-success-icon')
        validIcon.classList.remove('success-icon')  
        return true
    
    } else if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorEmail.innerHTML = 'invalid email format'
        errorEmail.classList.add('invalid')
        email.classList.remove('valid-border')
        email.classList.add('invalid-border')
        invalidIcon.classList.add('not-success-icon')

        validIcon.classList.remove('success-icon')
        return true
    }
    else {
        errorEmail.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        email.classList.remove('invalid-border')
        email.classList.add('valid-border')
     return false
    }
}

textArea.addEventListener('keyup', function() {
    textAreaValidation()
})

function textAreaValidation() {
    const invalidIcon = textArea.parentElement.querySelector('.invalid-icon')
    const validIcon = textArea.parentElement.querySelector('.valid-icon')
    const requiredReasonLength = 40
    const reason = textArea.value.length
    const remainder = 40-textArea.value.length

    if(!textArea.value.trim())  {
        textArea.classList.add('invalid-border')
        textArea.classList.remove('valid-border')
        errorTextArea.innerHTML = 'please kindly state applicaton reason'
        errorTextArea.classList.add('invalid')
        invalidIcon.classList.add('not-success-icon')
        validIcon.classList.remove('success-icon')  
        return true
    
    } else if(reason < 40) {
        errorTextArea.innerHTML = `reason must be greater 40 letters, ${remainder} letters remaining `
        errorTextArea.classList.add('invalid')
        textArea.classList.remove('valid-border')
        textArea.classList.add('invalid-border') 
        invalidIcon.classList.add('not-success-icon')
        validIcon.classList.remove('success-icon')
        return true
    }
    else {
        errorTextArea.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        textArea.classList.remove('invalid-border')
        textArea.classList.add('valid-border')
     return false
    }  
}



// login password validation


loginPasswordOne.addEventListener('keyup', function() {
    passwordValidation(loginPasswordOne, errorPasswordOne)
    validatePasswordTwo()

})



function passwordValidation(passwordType, passwordError) {
    const invalidIcon = passwordType.parentElement.querySelector('.invalid-icon')
    const validIcon = passwordType.parentElement.querySelector('.valid-icon')
    const requiredPassword = 7
    const password = passwordType.value
    // console.log(password)

    if(!passwordType.value.trim()) {
    passwordType.classList.add('invalid-border')
    passwordType.classList.remove('valid-border')
    passwordError.innerHTML = 'password cannot be empty'
    passwordError.classList.add('invalid')
    invalidIcon.classList.add('not-success-icon')
    validIcon.classList.remove('success-icon')  
    return true
    }  else if(password.length  < requiredPassword) {
    passwordType.classList.add('invalid-border')
    passwordType.classList.remove('valid-border')
    passwordError.innerHTML = 'password length must be more than 6'
    passwordError.classList.add('invalid')
    invalidIcon.classList.add('not-success-icon')
    validIcon.classList.remove('success-icon')  
    }  else {
        passwordError.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
        passwordType.classList.remove('invalid-border')
        passwordType.classList.add('valid-border')
    }


    
}


function validatePasswordTwo() {
    console.log(loginPasswordOne.value)
    console.log(loginPasswordTwo.value)
    const invalidIcon = loginPasswordTwo.parentElement.querySelector('.invalid-icon')
    const validIcon = loginPasswordTwo.parentElement.querySelector('.valid-icon')
    if(loginPasswordOne.value != loginPasswordTwo.value) {
        loginPasswordTwo.classList.add('invalid-border')
       loginPasswordTwo.classList.remove('valid-border')
       errorPasswordTwo.innerHTML = 'password does not match'
       errorPasswordTwo.classList.add('invalid')
       invalidIcon.classList.add('not-success-icon')
       validIcon.classList.remove('success-icon') 
       } 
}

loginPasswordTwo.addEventListener('keyup', function() {
    passwordMatch()
})

function passwordMatch() {
    const invalidIcon = loginPasswordTwo.parentElement.querySelector('.invalid-icon')
    const validIcon = loginPasswordTwo.parentElement.querySelector('.valid-icon')
    if(loginPasswordOne.value.length === loginPasswordTwo.value.length){
        errorPasswordTwo.innerHTML = ''
        validIcon.classList.add('success-icon')
        invalidIcon.classList.remove('not-success-icon')
    
        loginPasswordTwo.classList.remove('invalid-border')
        loginPasswordTwo.classList.add('valid-border')
        console.log('equal')
       } else {
        console.log('not equal');
       }
}




