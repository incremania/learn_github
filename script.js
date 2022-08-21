const toggleBtn = document.querySelector('.nav-toggle-btn')
const navContainer = document.querySelector('.nav-container-div')
const navbar = document.querySelector('.navbar')
const links = document.querySelector('.nav-items')


toggleBtn.addEventListener('click', function() {
    const containerHeight = navContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    
    // navContainer.classList.add('show-nav')
    if(containerHeight === 0) {
        navContainer.style.height = `${linksHeight + 20}px`
    } else {
        navContainer.style.height = 0
    }

    
})

window.addEventListener('scroll', function() {
    const navHeight = navbar.getBoundingClientRect().height
    
    const windowUsedHeight = window.pageYOffset
    if(windowUsedHeight > navHeight) {
      navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }
})