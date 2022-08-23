const firstForm = document.querySelector('.first-form')
const secondForm = document.querySelector('.second-form')
console.log(secondForm)
console.log(firstForm)

firstForm.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(e.target)
    firstForm.classList.add('hide-form')
    secondForm.classList.remove('hide-form')
})

secondForm.addEventListener('submit', function(e) {
    e.preventDefault()
})

// window.addEventListener('DOMContentLoaded', function() {
    
// })