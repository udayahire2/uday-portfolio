
const iconInfo = document.querySelector('.icon-info h3');

        // Map icon IDs to info text
        const infoMap = {
            instagram: 'Follow me on Instagram',
            linkedin: 'Connect with me on LinkedIn',
            github: 'Check out my GitHub',
            twitter: 'Follow me on Twitter'
        };

        // Add click listeners to each icon
        Object.keys(infoMap).forEach(id => {
            const icon = document.getElementById(id);
            if (icon) {
                icon.addEventListener('click', () => {
                    iconInfo.textContent = infoMap[id];
                    // Open Instagram profile on click
                    if (id === 'instagram') {
                        window.open('https://instagram.com/codewithuday2025', '_blank');
                    }
                    // Open LinkedIn profile on click
                    if (id === 'linkedin') {
                        window.open('https://www.linkedin.com/in/uday-ahire-0855b22b4/', '_blank');
                    }
                    // Open GitHub profile on click
                    if (id === 'github') {
                        window.open('https://github.com/udayahire2', '_blank');
                    }
                });
            }
        });
function home() {
  document.getElementsByClassName('hero')[0].scrollIntoView({
    behavior: 'smooth'
  });
}
function about() {
  document.getElementsByClassName('about-me')[0].scrollIntoView({
    behavior: 'smooth'
  });
}
function skill() {
  document.getElementsByClassName('tech-stack')[0].scrollIntoView({
    behavior: 'smooth'
  })
}
function education() {
  document.getElementsByClassName('education-section')[0].scrollIntoView({
    behavior: 'smooth'
  })
}

function Contact() {
  document.getElementsByClassName('contact')[0].scrollIntoView({
    behavior: 'smooth'
  })
}