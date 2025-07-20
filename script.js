document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.cta-btn');
    if (btn) {
        btn.addEventListener('click', function() {
            alert("Welcome to Indhuja Muthusamy's portfolio!");
        });
    }

    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Theme toggle logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function setTheme(mode) {
        if (mode === 'light') {
            body.classList.add('light-mode');
            themeToggle.textContent = '☀️';
        } else {
            body.classList.remove('light-mode');
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', mode);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = body.classList.contains('light-mode');
            setTheme(isLight ? 'dark' : 'light');
        });
        // On load, set theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    const showAwardsBtn = document.getElementById('show-awards-btn');
    const awardsGallery = document.getElementById('awards-gallery');
    if (showAwardsBtn && awardsGallery) {
        showAwardsBtn.addEventListener('click', function() {
            awardsGallery.style.display = 'flex';
            showAwardsBtn.style.display = 'none';
        });
    }

    // Scroll-triggered animation for sections
    const animatedSections = document.querySelectorAll('.hero, .about, .skills, .achievements, .recent-work, .get-in-touch');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });
    animatedSections.forEach(section => {
        observer.observe(section);
    });

    setTimeout(function() {
        document.body.classList.add('loaded');
        var loader = document.getElementById('page-loader');
        if (loader) {
            loader.classList.add('hide');
            setTimeout(function() {
                loader.parentNode.removeChild(loader);
            }, 600);
        }
    }, 1000);
}); 