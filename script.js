// ============================
// Fade-in landing text
// ============================
const landingText = document.querySelector(".landing-text");
const landingSubtext = document.querySelector(".landing-subtext");

window.addEventListener("DOMContentLoaded", () => {
    // Fade in
    setTimeout(() => {
        landingText.classList.add("fade-in");
        landingSubtext.classList.add("fade-in");
    }, 500);

    // Fade out after 4 seconds
    setTimeout(() => {
        landingText.classList.remove("fade-in");
        landingSubtext.classList.remove("fade-in");
        landingText.classList.add("fade-out");
        landingSubtext.classList.add("fade-out");
    }, 4000);
});

// ============================
// Smooth scrolling and show landing text on home click
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        // Show landing text when home is clicked
        if (this.getAttribute('href') === '#home') {
            landingText.classList.remove('fade-out');
            landingSubtext.classList.remove('fade-out');
            landingText.classList.add('fade-in');
            landingSubtext.classList.add('fade-in');
        }
    });
});

// ============================
// Reusable Project Card Component
// ============================
const projectsData = [
    {
        title: "Project One",
        img: "assets/images/icons/project1.jpg",
        desc: "A cool project built using HTML, CSS & JS.",
        link: "https://github.com/KavyaSH02/Cake-Shop"
    },
    {
        title: "Project Two",
        img: "assets/images/icons/project1.jpg",
        desc: "Another amazing project showcasing responsive design.",
        link: "https://github.com/dhanashri-mindsnxt/mindsnxt-frontend"
    },
    {
        title: "Project Three",
        img: "assets/images/icons/project1.jpg",
        desc: "Dynamic and interactive project using vanilla JS.",
        link: "#"
    }
];

const projectsGrid = document.getElementById("projects-grid");

projectsData.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
    <img src="${project.img}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
    projectsGrid.appendChild(card);
});

// ============================
// Contact Form Validation
// ============================
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields!");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email!");
        return;
    }

    alert("Form submitted successfully!");
    this.reset();
});
