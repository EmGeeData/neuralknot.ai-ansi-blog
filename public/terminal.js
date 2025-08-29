// Load ASCII art from external file
async function loadAsciiArt() {
    try {
        const response = await fetch('/ascii-art.txt');
        const asciiText = await response.text();
        document.getElementById('ascii-art').textContent = asciiText;
    } catch (error) {
        console.error('Error loading ASCII art:', error);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadAsciiArt();
    
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setTimeout(() => {
            cursor.style.animation = 'blink 1s infinite';
        }, 1000);
    }
});

// Add click handlers only for non-functional menu items (those with # href)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu-item[href="#"]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const option = this.textContent.match(/\[(.)\]/)[1];
            alert(`Terminal Access: "${option}"\n\n${this.textContent.split('] ')[1]} section loading...\n\nConnection established.`);
        });
    });
});

// Simulate modem connect sounds (visual feedback)
document.addEventListener('keypress', function() {
    document.body.style.animation = 'none';
    setTimeout(() => {
        document.body.style.animation = 'scanlines 0.1s linear infinite';
    }, 100);
});