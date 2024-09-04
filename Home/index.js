const video = document.getElementById('myVideo');
const playPauseDiv = document.getElementById('play-pause-btn');
const cancelBtn = document.getElementById('x-mark');

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

playPauseDiv.addEventListener('click', togglePlay);
cancelBtn.addEventListener('click', closeFirstDivHandler);
