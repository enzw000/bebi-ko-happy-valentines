document.addEventListener('DOMContentLoaded', function () {
    // Get all necessary elements
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const galleryButton = document.getElementById('galleryButton');
    const yesPage = document.getElementById('yesPage');
    const gallerySection = document.getElementById('gallerySection');
    const container = document.querySelector('.container');
    const hearts = document.querySelectorAll('.heart');

    // Handle "Yes" button click
    yesButton.addEventListener('click', function () {
        container.classList.add('hidden'); // Hide the main container
        yesPage.classList.remove('hidden'); // Show the "Yes" page
    });

    // Handle "No" button click
    noButton.addEventListener('click', function () {
        // Move the "No" button far away and fade it out
            const container = document.querySelector('.container');
            const containerRect = container.getBoundingClientRect();
            const buttonRect = noButton.getBoundingClientRect();
    
            const maxX = containerRect.width - buttonRect.width;
            const maxY = containerRect.height - buttonRect.height;
    
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
    
            noButton.style.position = 'absolute';
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`; // Make it unclickable
    });

    // Handle "Gallery" button click
    galleryButton.addEventListener('click', function () {
        container.classList.add('hidden'); // Hide the main container
        yesPage.classList.add('hidden'); // Hide the "Yes" page (if visible)
        gallerySection.classList.remove('hidden'); // Show the gallery section
    });

    // Back button functionality
    document.querySelectorAll('.back-button').forEach(button => {
        button.addEventListener('click', function () {
            yesPage.classList.add('hidden'); // Hide the "Yes" page
            gallerySection.classList.add('hidden'); // Hide the gallery section
            container.classList.remove('hidden'); // Show the main container
        });

    
        
            hearts.forEach(heart => {
                // Generate a random duration between 4s and 8s
                const randomDuration = Math.random() * (8 - 4) + 4; // Random duration between 4s and 8s
                heart.style.setProperty('--duration', `${randomDuration}s`); // Set the CSS variable
                heart.style.left = `${Math.random() * 100}%`; // Randomize the left position
        });
    });
});
