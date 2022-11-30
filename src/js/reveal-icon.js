const target = document.querySelectorAll('[data-icon]');
const animationClass = 'animate';

function animateOnScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);

    target.forEach(function (element) {
        if ((windowTop) >= 800) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

window.addEventListener('scroll', function () {
    animateOnScroll()
})