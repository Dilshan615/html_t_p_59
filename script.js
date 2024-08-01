let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });

    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.screenY > 100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}


//  scrollReveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".home-content, .heading, .about-content, .progress i, .progress span", { origin: "top" });
ScrollReveal().reveal(".about-img, .project-container", { origin: "bottom" });
ScrollReveal().reveal(".progress h3, .bar span", { origin: "left" });


const typed = new Typed('.text', {
    strings: ['Frontend Developer', 'YouTuber', 'Frontend Designer'],
    typeSpeed: 90,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});