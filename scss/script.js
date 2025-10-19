// Hamburger menu toggle - Menu Lateral
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const body = document.body;

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    // Altera o ícone do hamburger para X quando aberto
    if (nav.classList.contains('active')) {
        hamburger.innerHTML = '✕';
    } else {
        hamburger.innerHTML = '&#9776;';
    }
});

// Fechar o menu ao clicar no overlay
overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
    hamburger.innerHTML = '&#9776;';
});

// Carrossel automático
let carouselIndex = 0;
const carouselImages = document.querySelectorAll('.carousel img');

function showCarousel() {
    carouselImages.forEach(img => img.classList.remove('active'));
    carouselImages[carouselIndex].classList.add('active');
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
}

// Iniciar carrossel
showCarousel();
setInterval(showCarousel, 4000);

// Fechar menu ao clicar em um link (para mobile)
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
            hamburger.innerHTML = '&#9776;';
        }
    });
});

// Fechar menu ao redimensionar a janela para desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
        hamburger.innerHTML = '&#9776;';
    }
});

