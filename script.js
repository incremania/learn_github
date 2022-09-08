
const toggleBtn = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.nav-bottom')
const sidebarloseBtn = document.querySelector('.fa-times')
const contactBtn = document.querySelector('.contact-support')
const chatSupport = document.querySelector('.chat-support')
const body = document.querySelector('body')

const navLinks = document.querySelectorAll('.item-link')

contactBtn.addEventListener('click', function(e) {
    e.preventDefault()
    chatSupport.classList.toggle('hide-link') 
})



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

// back to top styling

const toTopBtn = document.querySelector('.to-top')



window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset
    if(scrollHeight >= 635) {
       toTopBtn.classList.add('show-totopbtn')
    } else {
        toTopBtn.classList.remove('show-totopbtn')
    }
   
})


//  footer more about this grant styling

const moreAbout = document.querySelector('.about-footer')
const toggleAboutBtn = document.querySelector('.more-toggle')


toggleAboutBtn.addEventListener('click', function() {
    moreAbout.classList.toggle('show-more')
})


