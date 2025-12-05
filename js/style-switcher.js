/* ========================== toggle style switcher ========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    })
    //hide style -switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});
/* ==========================theme colors ========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}
/* ========================== theme light and dark ========================== */
const daynight = document.querySelector(".day-night");

daynight.addEventListener("click", () => {
    const icon = daynight.querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    const icon = daynight.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    } else {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
    }
});
// Toggle menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.getElementById('navToggler');
    const aside = document.querySelector('.aside');
    const navMenu = document.getElementById('navMenu');

    // Toggle menu when hamburger icon is clicked
    navToggler.addEventListener('click', function() {
        aside.classList.toggle('active');
        navToggler.classList.toggle('active');
    });

    // Close menu when clicking on a link (for mobile)
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                aside.classList.remove('active');
                navToggler.classList.remove('active');

                // Update active link
                navLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Close menu when clicking outside (for mobile)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInsideAside = aside.contains(event.target);
            const isClickOnToggler = navToggler.contains(event.target);

            if (!isClickInsideAside && !isClickOnToggler) {
                aside.classList.remove('active');
                navToggler.classList.remove('active');
            }
        }
    });
});