document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Intersection Observer for Animations (optional fade-in effect)
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu on click
            navLinks.classList.remove('active');
        });
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.dataset.filter;

            projectCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (filterValue === 'all' || cardCategory.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Contact Form using EmailJS
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // You MUST replace YOUR_USER_ID, YOUR_SERVICE_ID, and YOUR_TEMPLATE_ID
        emailjs.init('5PrepFL-pRJRe6aFZ');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            emailjs.sendForm('service_jbqan1g', 'template_dhfxjjq', this)
                .then(() => {
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, (error) => {
                    alert('Failed to send message. Please try again later.');
                    console.error('EmailJS Error:', error);
                });
        });
    }
});