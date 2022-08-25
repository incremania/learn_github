const toggleBtn = document.querySelector('.nav-toggle-btn')
const sideBar = document.querySelector('.side-bar')
const closeBtn = document.querySelector('.side-close-btn')
const contactBtn = document.querySelector('.contact-support')
const chatSupport = document.querySelector('.chat-support')
const chats = document.querySelectorAll('chat')
const navLinks = document.querySelectorAll('.nav-link')

toggleBtn.addEventListener('click', function() {
    sideBar.classList.add('show-nav') 
})

closeBtn.addEventListener('click', function() {
    sideBar.classList.remove('show-nav')
})


contactBtn.addEventListener('click', function(e) {
    e.preventDefault()
    chatSupport.classList.remove('hide-link') 
})

chats.forEach(chat => {
    chat.addEventListener('click', function(e) {
        e.preventDefault()
    })
})

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function() {
        sideBar.classList.remove('show-nav')
    })
})



