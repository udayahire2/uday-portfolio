
// Select the info element
const iconInfo = document.querySelector('.icon-info h3');

// Map of icon IDs to their info text and URLs
const infoMap = {
    instagram: { text: 'Follow me on Instagram', url: 'https://instagram.com/codewithuday2025' },
    linkedin: { text: 'Connect with me on LinkedIn', url: 'https://www.linkedin.com/in/uday-ahire-0855b22b4/' },
    github: { text: 'Check out my GitHub', url: 'https://github.com/udayahire2' },
    twitter: { text: 'Follow me on Twitter', url: null }
};

// Add click listeners to icons
Object.entries(infoMap).forEach(([id, { text, url }]) => {
    const icon = document.getElementById(id);
    if (icon) {
        icon.addEventListener('click', () => {
            if (iconInfo) iconInfo.textContent = text;
            if (url) window.open(url, '_blank');
        });
    }
});

// Scroll functions with error handling
const scrollToSection = (className) => {
    const element = document.getElementsByClassName(className)[0];
    if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const home = () => scrollToSection('hero');
const about = () => scrollToSection('about-me');
const skill = () => scrollToSection('tech-stack');
const education = () => scrollToSection('education-section');
const contact = () => scrollToSection('contact');
