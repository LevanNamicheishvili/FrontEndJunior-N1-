const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelectorAll('.nav-ul')
const navigation = document.querySelector('.navigation')

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle("active")
    navMenu.forEach(nav => {
        nav.classList.toggle("show")
    })
    navigation.classList.toggle("show")
})