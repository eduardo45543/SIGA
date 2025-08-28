// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = 'none';
    }
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.nome || !data.telefone || !data.email) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Create WhatsApp message
        const message = `Olá! Gostaria de mais informações sobre a Jornada do Saber.
        
*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*Email:* ${data.email}
*Instituição:* ${data.instituicao || 'Não informado'}
*Mensagem:* ${data.mensagem || 'Solicito mais informações sobre a Jornada do Saber.'}`;
        
        const whatsappUrl = `https://wa.me/5562982173800?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('Redirecionando para WhatsApp. Obrigado pelo contato!');
    });
}

// Book Card Hover Effects
document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const mainBook = card.querySelector('.main-book');
        if (mainBook) {
            mainBook.style.transform = 'rotate(3deg) scale(1.05)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const mainBook = card.querySelector('.main-book');
        if (mainBook) {
            mainBook.style.transform = 'rotate(3deg) scale(1)';
        }
    });
});

// Volume Hover Effects
document.querySelectorAll('.volume').forEach(volume => {
    volume.addEventListener('mouseenter', () => {
        volume.style.transform = 'translateY(-4px) scale(1.05)';
    });
    
    volume.addEventListener('mouseleave', () => {
        volume.style.transform = 'translateY(0) scale(1)';
    });
});

// Hero Image Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-chip, .hero-title, .hero-subtitle, .hero-features, .hero-cta');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 100);
});

// Typing Effect for Hero Title (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Add floating animation to WhatsApp button
const whatsappFloat = document.querySelector('.whatsapp-float');
if (whatsappFloat) {
    setInterval(() => {
        whatsappFloat.style.animation = 'none';
        setTimeout(() => {
            whatsappFloat.style.animation = 'float 2s ease-in-out infinite';
        }, 10);
    }, 3000);
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .loaded .hero-chip,
    .loaded .hero-title,
    .loaded .hero-subtitle,
    .loaded .hero-features,
    .loaded .hero-cta {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
`;
document.head.appendChild(style);

// Add intersection observer for count-up animations (if you want to add numbers)
function animateCountUp(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCount() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    }
    updateCount();
}

// Add click tracking for analytics (if needed)
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary, .whatsapp-float, .whatsapp-link')) {
        // Track button clicks
        console.log('Button clicked:', e.target.textContent || 'WhatsApp');
    }
});

console.log('SIGA Soluções Educacionais - Site carregado com sucesso!');
