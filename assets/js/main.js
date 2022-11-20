/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)
function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        if ((scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


var hocsinh = [
    { ten: 'huy', khoi: 'A', diem: { toan: 7, van: 5, anh: 5 } },
    { ten: 'lam', khoi: 'B', diem: { toan: 7, van: 7, anh: 5 } },
    { ten: 'tung', khoi: 'C', diem: { toan: 7, van: 4, anh: 7 } },
]
var khoithi = [
    { khoi: 'A', heso: { toan: 2, van: 1, anh: 1 }, diemsan: 25 },
    { khoi: 'B', heso: { toan: 1, van: 1, anh: 2 }, diemsan: 24 },
    { khoi: 'C', heso: { toan: 1, van: 2, anh: 1 }, diemsan: 20 },
]

let khois = khoithi.reduce((result, ele) => {
    result[ele.khoi] = ele;
    return result;
}, {})

console.log(khois)