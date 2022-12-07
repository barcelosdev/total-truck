const menuMobile = document.getElementById('nav-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

menuMobile.addEventListener('click', toggleMenu)