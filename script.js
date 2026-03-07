const contentData = {
    1: {
        original: "What do I do?",
        revealed: "I build apps and websites that help people."
    },
    2: {
        original: "Why is it fun?",
        revealed: "Because coding is exciting and can create anything you want."
    },
    3: {
        original: "How can you become one?",
        revealed: "Learning, Coding, and Working hard."
    }
};

function toggleText(id, isReveal) {
    const textElement = document.getElementById(`text${id}`);
    const cardElement = document.getElementById(`card${id}`);

    // Add a small animation effect
    textElement.style.opacity = '0';
    textElement.style.transform = 'translateY(5px)';

    setTimeout(() => {
        if (isReveal) {
            textElement.innerHTML = contentData[id].revealed;
            textElement.classList.add('revealed-text');
            cardElement.classList.add('active');
        } else {
            textElement.innerHTML = contentData[id].original;
            textElement.classList.remove('revealed-text');
            cardElement.classList.remove('active');
        }

        textElement.style.opacity = '1';
        textElement.style.transform = 'translateY(0)';
    }, 200);
}
