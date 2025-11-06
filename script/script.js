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


//Script Do Mapa

// Script do mapa
function initMap() {
  const mamaLocal = { lat: -5.17879, lng: -40.67798 }; // Coordenadas Crateús

  const mapa = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 17,
    center: mamaLocal,
    mapId: "MAMA_MAP_ID",
  });

  // Ícone personalizado da MAMA
  const marcadorPersonalizado = {
    url: "assets/locmama.png", // Caminho da imagem (ajuste conforme seu projeto)
    scaledSize: new google.maps.Size(70, 70), // Tamanho ajustável do ícone
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(35, 70), // Ponto de ancoragem (base do pino)
  };

  // Marcador com o ícone rosa da MAMA
  new google.maps.Marker({
    position: mamaLocal,
    map: mapa,
    title: "MAMA - Associação Mulheres Amadas Mulheres Assistidas",
    icon: marcadorPersonalizado,
  });
}
