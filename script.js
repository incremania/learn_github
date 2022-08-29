
const toggleBtn = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.nav-bottom')
const sidebarloseBtn = document.querySelector('.fa-times')
const contactBtn = document.querySelector('.contact-support')
const chatSupport = document.querySelector('.chat-support')
// const chats = document.querySelectorAll('.chat')
const navLinks = document.querySelectorAll('.item-link')

contactBtn.addEventListener('click', function(e) {
    e.preventDefault()
    chatSupport.classList.remove('hide-link') 
})

// chats.forEach(chat => {
//     chat.addEventListener('click', function(e) {
//         // e.preventDefault()
//     })
// })

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function() {
        sidebar.classList.remove('show-sidebar')
    })
})


toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('show-sidebar')
})

sidebarloseBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
})



