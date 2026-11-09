// Rolagem suave para os links da navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, 
                behavior: 'smooth'
            });
        }
    });
});

// Efeito na navbar ao rolar a página (fica menor e com mais sombra)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '15px 5%';
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        nav.style.padding = '20px 5%';
        nav.style.boxShadow = 'none';
    }
});

// Animação de Fade-in (Surgimento) ao rolar a página
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Dispara quando 15% do elemento aparece na tela
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para a animação acontecer apenas uma vez
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});


// Controle do Banner de Cookies
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');

// Na demo, apenas escondemos o banner. Em produção, você salvaria isso no localStorage.
if(acceptBtn) {
    acceptBtn.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
    });
}