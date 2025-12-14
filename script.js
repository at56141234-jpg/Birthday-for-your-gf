document.addEventListener('DOMContentLoaded', () => {
    const stage1 = document.getElementById('stage1');
    const movingHeart = document.getElementById('movingHeart');
    const initialMessage = document.getElementById('initialMessage');
    const whatsItButton = document.getElementById('whatsItButton');
    
    const stage2 = document.getElementById('stage2');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    const stage3 = document.getElementById('stage3');
    const yesProposal = document.getElementById('yesProposal');
    const noProposal = document.getElementById('noProposal');

    const stage4 = document.getElementById('stage4');

    // --- STAGE 1 LOGIC: Initial Heart Animation and Text Reveal ---

    // 1. After 1 second, hide the heart movement and show the text
    setTimeout(() => {
        // Stop the heart animation (by removing its animation class or changing its visibility)
        movingHeart.style.animation = 'none';
        movingHeart.style.opacity = '0.1'; // Make it very subtle in the background
        
        // Slowly display the text
        initialMessage.classList.remove('hidden');
    }, 1000); // 1000 milliseconds = 1 second

    // 2. Click the 'What's it?' button to move to Stage 2
    whatsItButton.addEventListener('click', () => {
        stage1.classList.add('hidden');
        stage2.classList.remove('hidden');
        // Ensure the video is played if it has an autoplay issue
        const videoElement = stage2.querySelector('video');
        if (videoElement) {
             videoElement.play().catch(error => {
                console.log("Autoplay failed, user might need to click play.", error);
            });
        }
    });

    // --- STAGE 2 LOGIC: Love Declaration ---

    // 3. Click 'No' button
    noButton.addEventListener('click', () => {
        alert("🥺 Please don't break my heart! 💔");
        // You could also add a funny effect here to make the 'No' button harder to click
    });

    // 4. Click 'Yes' button to move to Stage 3
    yesButton.addEventListener('click', () => {
        stage2.classList.add('hidden');
        stage3.classList.remove('hidden');
    });

    // --- STAGE 3 LOGIC: The Proposal ---

    // 5. 'No' button runs around the screen when the mouse is near it
    noProposal.addEventListener('mouseover', (e) => {
        // Prevent the default absolute position from being broken
        noProposal.style.position = 'absolute';
        
        // Get current button position
        const rect = noProposal.getBoundingClientRect();
        
        // Get mouse position
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Check if mouse is near the button
        if (mouseX > rect.left && mouseX < rect.right && mouseY > rect.top && mouseY < rect.bottom) {
            
            // Calculate new random position within a reasonable range (e.g., 80% of viewport)
            const newX = Math.random() * (window.innerWidth * 0.7);
            const newY = Math.random() * (window.innerHeight * 0.7);
            
            // Apply new position
            noProposal.style.left = '${newX}px';
            noProposal.style.top = '${newY}px';
        }
    });

    // To ensure the button returns to a central position if the mouse leaves the area
    stage3.addEventListener('mouseleave', () => {
        // Center the button in its container again
        noProposal.style.position = 'relative'; // Go back to normal flow
        noProposal.style.top = '0';
        noProposal.style.left = '0';
    });


    // 6. Click 'Yes, forever!' button to move to Stage 4
    yesProposal.addEventListener('click', () => {
        stage3.classList.add('hidden');
        stage4.classList.remove('hidden');
    });

});