// Select the info element
const iconInfo = document.querySelector('.icon-info h3');

// Map of icon IDs to their info text and URLs
const infoMap = {
    instagram: { text: 'Follow me on Instagram', url: 'https://instagram.com/udayahire02' },
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

// Resume Section Functionality
const resumeButton = document.querySelector('.resume-button');

if (resumeButton) {
  resumeButton.addEventListener('click', (event) => {
    event.preventDefault();
    const resumeUrl = './Uday-resume.png'; // Replace with the actual resume file path
    const previewWindow = window.open(resumeUrl, '_blank');
    if (!previewWindow) {
      alert('Please allow popups for this website to preview the resume.');
    }
  });
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Thanks for your submission!';
                contactForm.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    formStatus.textContent = 'Oops! There was a problem submitting your form';
                }
            }
        } catch (error) {
            formStatus.textContent = 'Oops! There was a problem submitting your form';
        }
    });
}
