// Simple parallax and reveal on scroll
(function() {
    const parallaxEls = document.querySelectorAll('[data-speed]');
    const revealEls = document.querySelectorAll('.content, .item');

    function onScroll() {
        const scrollY = window.pageYOffset;
        parallaxEls.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-speed'));
            el.style.backgroundPosition = `center ${-scrollY * speed}px`;
        });

        revealEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    document.addEventListener('DOMContentLoaded', onScroll);
})();