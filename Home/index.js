const video = document.getElementById('myVideo');
const playPauseDiv = document.getElementById('play-pause-btn');
const cancelBtn = document.getElementById('x-mark');
const biggerBanners = document.querySelectorAll('.bigger-movie-banners img');
const dots = document.querySelector('.carousel-dots');

let currentBigBanner = 0;
let bigBannerInterval;
let isPlaying = true;

const closeFirstDivHandler = () => {
    const firstDiv = document.getElementById('first-div');
    firstDiv.style.display = 'none';
}

function togglePlay() {
    if (video.paused) {
        video.play();
        video.loop = true;
        playPauseDiv.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        playPauseDiv.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function changeBigBanner() {
    biggerBanners.forEach((banner, index) => {
        banner.style.display = index === currentBigBanner ? 'block' : 'none';
    });
    updateDots(currentBigBanner);
    currentBigBanner = (currentBigBanner + 1) % biggerBanners.length;
}


function updateDots(index) {
    dots.innerHTML = '';
    biggerBanners.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = i === index ? 'dot active' : 'dot';
        dots.appendChild(dot);
    });
}

function startCarousel() {
    bigBannerInterval = setInterval(changeBigBanner, 3000);
}

function stopCarousel() {
    clearInterval(bigBannerInterval);
}

function toggleCarousel() {
    if (isPlaying) {
        stopCarousel();
        playPauseDiv.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        startCarousel();
        playPauseDiv.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

playPauseDiv.addEventListener('click', togglePlay);
cancelBtn.addEventListener('click', closeFirstDivHandler);
playPauseDiv.addEventListener('click', toggleCarousel);

startCarousel();
updateDots(currentBigBanner);
