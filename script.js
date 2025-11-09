document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const themeTransition = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "bottom top",
      end: "bottom+=200 top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const bgPrimary = gsap.utils.interpolate("#0A0A0B", "#FAFAFA", progress);
        const bgSurface = gsap.utils.interpolate("#161618", "#FFFFFF", progress);
        const textPrimary = gsap.utils.interpolate("#F8FAFC", "#0F172A", progress);
        const textSecondary = gsap.utils.interpolate("#9E9E9E", "#555555", progress);
        const borderColor = gsap.utils.interpolate("#2A2A2A", "#E5E5E5", progress);

        document.documentElement.style.setProperty('--bg-primary', bgPrimary);
        document.documentElement.style.setProperty('--bg-surface', bgSurface);
        document.documentElement.style.setProperty('--text-primary', textPrimary);
        document.documentElement.style.setProperty('--text-secondary', textSecondary);
        document.documentElement.style.setProperty('--border-color', borderColor);
        document.body.style.backgroundColor = bgPrimary;
      }
    }
  });

  let info = document.querySelector(".icon-info h3");

  const hoverTexts = {
    instagram: "View My Instagram Profile",
    github: "View Projects",
    linkedin: "View Linkedin Profile",
  };

  Object.keys(hoverTexts).forEach(id => {
    let element = document.querySelector(`#${id}`);
    if (element) {
      element.addEventListener("mouseenter", () => {
        info.textContent = hoverTexts[id];
      });
      element.addEventListener("mouseleave", () => {
        info.textContent = "Visit Profile";
      });
    }
  });

  gsap.from(".intro h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".intro p", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".intro label", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
  });

  gsap.from(".intro button", {
    duration: 1,
    scale: 0,
    opacity: 0,
    delay: 0.7,
    ease: "back.out(1.7)"
  });

  gsap.from(".icons svg", {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    delay: 0.8,
    ease: "back.out(1.7)",
    clearProps: "all"
  });

  gsap.from(".icon-info", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1.2,
    ease: "power3.out",
    clearProps: "all"
  });

  gsap.from(".about-me .section-title", {
    scrollTrigger: {
      trigger: ".about-me",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".about-me .container p", {
    scrollTrigger: {
      trigger: ".about-me .container",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out"
  });

  gsap.from(".resume-section .section-title", {
    scrollTrigger: {
      trigger: ".resume-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".resume-card", {
    scrollTrigger: {
      trigger: ".resume-card",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)"
  });

  gsap.from(".education-section .section-title", {
    scrollTrigger: {
      trigger: ".education-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".education-card", {
    scrollTrigger: {
      trigger: ".education-card",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".tech-stack .section-title", {
    scrollTrigger: {
      trigger: ".tech-stack",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".tech-icon", {
    scrollTrigger: {
      trigger: ".tech-content",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 0.8,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out(1.7)",
    clearProps: "all"
  });

  gsap.from(".projects .section-title", {
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: ".projects-container",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    clearProps: "all"
  });

  gsap.from(".footer h1", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)"
  });

  gsap.from(".footer .label1", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.2,
    ease: "power3.out"
  });

  gsap.from(".footer .label2", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 0.4,
    ease: "power3.out"
  });

  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6,
    ease: "power3.out"
  });

  document.querySelectorAll('.dynamic-island a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetSection,
            offsetY: 100
          },
          ease: "power3.inOut"
        });
      }
    });
  });

  const sections = document.querySelectorAll('.hero, .about-me, .education-section, .tech-stack, .projects, .resume-section, .footer');
  const navLinks = document.querySelectorAll('.dynamic-island a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  let lastScroll = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      header.style.transform = 'translateY(0)';
      return;
    }
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  });

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('input[type="submit"]');
      submitButton.disabled = true;
      submitButton.value = 'Sending...';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formStatus.textContent = 'Thanks for your message! I\'ll get back to you soon.';
          formStatus.style.color = '#00a493';
          contactForm.reset();
          gsap.from(formStatus, {
            duration: 0.5,
            scale: 0,
            opacity: 0,
            ease: "back.out(1.7)"
          });
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        formStatus.textContent = 'Oops! There was a problem. Please try again.';
        formStatus.style.color = '#ff6b6b';
      } finally {
        submitButton.disabled = false;
        submitButton.value = 'Submit';
      }
    });
  }

  const instagramIcon = document.getElementById('instagram');
  const linkedinIcon = document.getElementById('linkedin');
  const githubIcon = document.getElementById('github');

  if (instagramIcon) {
    instagramIcon.addEventListener('click', () => {
      window.open('https://www.instagram.com/your-profile', '_blank');
    });
  }

  if (linkedinIcon) {
    linkedinIcon.addEventListener('click', () => {
      window.open('https://www.linkedin.com/in/your-profile', '_blank');
    });
  }

  if (githubIcon) {
    githubIcon.addEventListener('click', () => {
      window.open('https://github.com/udayahire2', '_blank');
    });
  }

  const getStartedBtn = document.querySelector('.intro button');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: '#About',
          offsetY: 100
        },
        ease: "power3.inOut"
      });
    });
  }

  console.log('Portfolio loaded successfully!');
});
