const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const headerText = document.querySelector('.header_text');
const gifImg = document.querySelector('.gif_container img');

// Function to move the No button
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Event listener for mouseover (desktop)
noBtn.addEventListener('mouseover', moveButton);

// Event listener for click (mobile/fallback) - though it's hard to click!
noBtn.addEventListener('click', moveButton);

// Yes button functionality
yesBtn.addEventListener('click', () => {
    headerText.innerHTML = "Yay! I knew you would say yes! <br> Happy Valentine's Day!";
    gifImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6eHpwNnQ0c3pwaWZ2b3ppNHI4Z3Z2Ynd0Z3Z4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/T86i6yDyOYz7J6dPhf/giphy.gif"; // Happy gif
    
    // Hide buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});
