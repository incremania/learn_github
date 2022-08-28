const toggleBtn = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.nav-bottom')
const sidebarloseBtn = document.querySelector('.fa-times')

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('show-sidebar')
})

sidebarloseBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
})