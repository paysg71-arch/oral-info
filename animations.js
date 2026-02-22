(function() {
    'use strict';

    // Révélation au scroll (Intersection Observer)
    var revealEls = document.querySelectorAll('.reveal, .reveal-left');
    if (revealEls.length && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function(el, i) {
            el.style.transitionDelay = (i % 4) * 0.08 + 's';
            observer.observe(el);
        });
    }

    // Bouton retour en haut
    var backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', function() {
            backBtn.classList.toggle('visible', window.scrollY > 350);
        });
        backBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();
