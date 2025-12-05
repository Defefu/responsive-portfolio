// Typing Animation
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Graphics Designer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// Navigation Active Class
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav a.active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('.section.active').classList.remove('active');
        document.querySelector(this.getAttribute('href')).classList.add('active');
    });
});

// Mobile Menu
document.querySelector('.nav-toggler').addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('open');
    document.querySelector('.nav-toggler').classList.toggle('open');
});