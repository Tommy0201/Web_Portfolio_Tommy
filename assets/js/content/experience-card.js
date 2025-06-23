// Select all cards
const cards = document.querySelectorAll('.card1');

// Create the intersection observer with multiple thresholds
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const ratio = entry.intersectionRatio;

        if (ratio >= 0.1) {
            entry.target.classList.add('scale-in');
        } 

        if (ratio < 0.8) {
            entry.target.classList.remove('scale-in');
        }
    });
}, {
    threshold: [0, 0.1, 0.8, 1]    
});

// Observe each card
cards.forEach(card => {
    observer.observe(card);
});
