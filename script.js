const contentData = {
    1: {
        original: "What do I do?",
        revealed: "I build amazing apps and websites that help people to do cool things! 🚀"
    },
    2: {
        original: "Why is it fun?",
        revealed: "Because coding is like Magic! 🪄 You can create literally anything you imagine."
    },
    3: {
        original: "How can you become one?",
        revealed: "By learning, playing with code, and never giving up! 💪"
    }
};

function toggleText(id, isReveal) {
    const textElement = document.getElementById(`text${id}`);
    const cardElement = document.getElementById(`card${id}`);

    // Add a fun wiggle animation to the card when a button is clicked!
    cardElement.classList.remove('wiggle');
    // Trigger reflow to restart animation on consecutive clicks
    void cardElement.offsetWidth;
    cardElement.classList.add('wiggle');

    // Smoothly scale down before changing text
    textElement.style.transform = 'scale(0.5)';
    textElement.style.opacity = '0';

    setTimeout(() => {
        if (isReveal) {
            textElement.innerHTML = contentData[id].revealed;
            textElement.classList.add('revealed-text');
        } else {
            textElement.innerHTML = contentData[id].original;
            textElement.classList.remove('revealed-text');
        }

        // Reset scale/opacity so the CSS @keyframes take over
        textElement.style.transform = '';
        textElement.style.opacity = '1';
    }, 200);
}
