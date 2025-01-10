document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.getElementById('heart-container');
    const popup = document.getElementById('popup');

    // Create scattered hearts
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.left = `${Math.random() * 100}vw`;
        heartContainer.appendChild(heart);
    }

    // Show popup after animation
    setTimeout(() => {
        popup.classList.remove('hidden');
    }, 5000);
});

function respondToInvite(response) {
    if (response === 'yes') {
        alert("Great! Let's hang out!");
    } else {
        alert("Maybe next time!");
    }
}
