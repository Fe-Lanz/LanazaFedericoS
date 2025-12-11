document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links that point to a section ID
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Smooth scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Scrolls to the start of the section
                });
            }
        });
    });
});