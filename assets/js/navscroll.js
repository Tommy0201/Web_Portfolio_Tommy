document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#side-nav a');
    const sections = document.querySelectorAll('article');

    sections.forEach((section, index) => {
        if (index === 0) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Hide all sections
                    sections.forEach(section => section.classList.remove('active-section'));

                    // Show the target section
                    targetSection.classList.add('active-section');

                    // Smooth scroll to the section
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
