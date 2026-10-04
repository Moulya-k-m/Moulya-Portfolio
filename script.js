document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    /* =========================
       NAVBAR ON SCROLL
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =========================
       PROJECT CARD TILT + GLOW
    ========================= */

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

            card.style.background =
                `radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(120, 70, 255, 0.12),
                    rgba(10, 10, 20, 0.92) 45%
                )`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
            card.style.background = "";
        });
    });


    /* =========================
       FLOATING PARTICLES
    ========================= */

    const particleContainer = document.createElement("div");

    particleContainer.className = "particles";

    document.body.appendChild(particleContainer);

    for (let i = 0; i < 22; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particle.style.animationDelay =
            `${Math.random() * 6}s`;

        particle.style.animationDuration =
            `${5 + Math.random() * 7}s`;

        particleContainer.appendChild(particle);
    }


    /* =========================
       THEME BUTTON
    ========================= */

    const themeButton = document.querySelector(".theme-btn");

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            const isLight =
                document.body.classList.contains("light-mode");

            localStorage.setItem(
                "portfolio-theme",
                isLight ? "light" : "dark"
            );
        });

        const savedTheme =
            localStorage.getItem("portfolio-theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
        }
    }


    /* =========================
       ACTIVE NAV LINK
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navItems.forEach(link => {
                        link.classList.remove("active");
                    });

                    const activeLink =
                        document.querySelector(
                            `.nav-links a[href="#${entry.target.id}"]`
                        );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });

        },
        {
            threshold: 0.35
        }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* =========================
   KEEP HERO GIRL STILL
========================= */

const characterImage =
    document.querySelector(".hero-character img");

if (characterImage) {
    characterImage.style.animation = "none";
}


/* =========================
   GIRL MOUSE GLOW
========================= */

const heroCharacter = document.querySelector(".hero-character");
const girlGlow = document.querySelector(".girl-glow");

if (heroCharacter && girlGlow) {

    heroCharacter.addEventListener("mousemove", (event) => {

        const rect = heroCharacter.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        girlGlow.style.left = `${x}px`;
        girlGlow.style.top = `${y}px`;
        girlGlow.style.opacity = "1";
    });

    heroCharacter.addEventListener("mouseleave", () => {
        girlGlow.style.opacity = "0";
    });
}

});