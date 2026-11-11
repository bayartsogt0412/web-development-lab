const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Цэс хаах' : 'Цэс нээх');
});

nav.addEventListener('click', function (event) {
    if (event.target.classList.contains('nav-link')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Цэс нээх');
    }
});
