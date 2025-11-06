 // Menu Mobile
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');
        const overlay = document.getElementById('overlay');
        const body = document.body;

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            if (nav.classList.contains('active')) {
                hamburger.innerHTML = '✕';
            } else {
                hamburger.innerHTML = '&#9776;';
            }
        });

        overlay.addEventListener('click', () => {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
            hamburger.innerHTML = '&#9776;';
        });

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

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('menu-open');
                hamburger.innerHTML = '&#9776;';
            }
        });

        // Efeito de digitação no hero
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Página de dicas carregada com sucesso!');
            
            // Adiciona animação de entrada nos cards
            const cards = document.querySelectorAll('.tip-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });
