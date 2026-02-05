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
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();

    let x, y;
    let safe = false;

    while (!safe) {
        // Random position inside container
        x = Math.random() * (containerRect.width - noBtn.offsetWidth);
        y = Math.random() * (containerRect.height - noBtn.offsetHeight);

        const newLeft = containerRect.left + x;
        const newTop = containerRect.top + y;

        const noRect = {
            left: newLeft,
            right: newLeft + noBtn.offsetWidth,
            top: newTop,
            bottom: newTop + noBtn.offsetHeight
        };

        // Check if overlapping YES button
        const overlap = !(
            noRect.right < yesRect.left ||
            noRect.left > yesRect.right ||
            noRect.bottom < yesRect.top ||
            noRect.top > yesRect.bottom
        );

        if (!overlap) safe = true;
    }

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${containerRect.left + x}px`;
    noBtn.style.top = `${containerRect.top + y}px`;

    // Grow YES button on mobile
    if (isMobile()) {
        yesScale = Math.min(yesScale + 0.15, 2.5);
        yesBtn.style.transform = `scale(${yesScale})`;
    }
}

// Desktop hover escape
noBtn.addEventListener('mouseover', moveButton);

// Mobile tap escape
noBtn.addEventListener('click', moveButton);

// Yes button functionality
// yesBtn.addEventListener('click', () => {
//     headerText.innerHTML = "Yay! I knew you would say yes! <br> Happy Valentine's Day!";
//     gifImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6eHpwNnQ0c3pwaWZ2b3ppNHI4Z3Z2Ynd0Z3Z4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/T86i6yDyOYz7J6dPhf/giphy.gif";

//     yesBtn.style.display = 'none';
//     noBtn.style.display = 'none';
// });
yesBtn.addEventListener('click', () => {
    headerText.innerHTML = "Yay! I knew you would say yes! <br> Happy Valentine's Day!";

    gifImg.style.display = "none";

    const video = document.createElement("video");
    video.src = "annivtrim.mp4";
    video.autoplay = true;
    video.loop = true;
    video.controls = false;
    video.style.width = "100%";
    video.style.maxWidth = "300px";
    video.style.borderRadius = "12px";
    video.style.marginBottom = "20px";

    document.querySelector('.gif_container').appendChild(video);

    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});
