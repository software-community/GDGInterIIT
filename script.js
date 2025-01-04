document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Animate domain cards on scroll
    const domainCards = document.querySelectorAll('.domain-card');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    domainCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Dynamic color change for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const colors = {
        'ai': '#00a8ff',
        'robotics': '#00ff7f',
        'quant': '#ffa500',
        'coding': '#ff00ff'
    };

    timelineItems.forEach(item => {
        const domain = item.getAttribute('data-domain');
        if (domain && colors[domain]) {
            item.style.borderLeft = `4px solid ${colors[domain]}`;
        }
    });
});

