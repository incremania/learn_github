const toggleBtn = document.querySelector('.nav-toggle-btn')
const sideBar = document.querySelector('.side-bar')
const closeBtn = document.querySelector('.side-close-btn')

toggleBtn.addEventListener('click', function() {
    sideBar.classList.add('show-nav')
    
})

closeBtn.addEventListener('click', function() {
    sideBar.classList.remove('show-nav')
})


