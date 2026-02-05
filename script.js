const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const headerText = document.querySelector('.header_text');
const gifImg = document.querySelector('.gif_container img');

let yesScale = 1; // tracks how big Yes button gets

function isMobile() {
    return window.innerWidth <= 480;
}

// Function to move the No button
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 💥 Make YES button grow when NO is pressed on mobile
    if (isMobile()) {
        yesScale = Math.min(yesScale + 0.15, 2.5); // limit max growth
        yesBtn.style.transform = `scale(${yesScale})`;
    }
}

// Desktop hover escape
noBtn.addEventListener('mouseover', moveButton);

// Mobile tap escape
noBtn.addEventListener('click', moveButton);

// Yes button functionality
yesBtn.addEventListener('click', () => {
    headerText.innerHTML = "Yay! I knew you would say yes! <br> Happy Valentine's Day!";
    gifImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6eHpwNnQ0c3pwaWZ2b3ppNHI4Z3Z2Ynd0Z3Z4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/T86i6yDyOYz7J6dPhf/giphy.gif";

    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});
