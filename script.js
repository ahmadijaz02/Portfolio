// Smooth Scroll to Section Headings
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // Scroll to section heading (offset by header height)
        window.scrollTo({
            top: targetSection.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});

// Rest of your JavaScript code (animations, back-to-top button, etc.)
// [Keep other JavaScript code here]

// Animate Skills List on Scroll
const skillsSection = document.getElementById('skills');
const skillsListItems = document.querySelectorAll('.skills-list li');

const animateSkills = () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        skillsListItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 300); // Delay each item by 300ms
        });
        window.removeEventListener('scroll', animateSkills); // Stop listening after animation
    }
};

window.addEventListener('scroll', animateSkills);

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Project Card Click Animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    });
});