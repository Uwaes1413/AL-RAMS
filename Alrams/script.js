// =========================
// CLOSE MOBILE MENU
// =========================
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".navbar-collapse");
        if (menu && menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});


// =========================
// CAROUSEL INIT (SINGLE SOURCE OF TRUTH)
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const carouselEl = document.getElementById("heroCarousel");
    if (carouselEl) {
        bootstrap.Carousel.getOrCreateInstance(carouselEl, {
            interval: 2500,     // 2.5 seconds
            pause: false,       // never stop autoplay
            touch: true,        // swipe enabled
            ride: "carousel"
        });
    }
});


// =========================
// ACTIVE NAV LINK ON SCROLL
// =========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    const pos = window.scrollY + 120;

    sections.forEach(section => {
        if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${section.id}`
                );
            });
        }
    });
});


// =========================
// SECTION FADE-IN ON SCROLL
// =========================
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
});


// =========================
// FORCE LEARN SECTION VISIBLE
// =========================
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section-learn").forEach(section => {
        section.classList.add("visible");
    });
});

document.querySelector(".footer-btn").addEventListener("click", () => {
    window.location.href = "#contact";
});

document.getElementById("enterBtn").addEventListener("click", () => {
    const intro = document.getElementById("introOverlay");

    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {
        intro.style.display = "none";
    }, 1000);
});

const hero = document.getElementById("heroCarousel");

