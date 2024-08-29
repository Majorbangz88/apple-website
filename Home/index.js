const video = document.getElementById('myVideo');
const playPauseDiv = document.getElementById('play-pause-btn');

function togglePlay() {
    if (video.paused) {
        video.play();
        playPauseDiv.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        playPauseDiv.innerHTML = '<i class="fas fa-play"></i>';
    }
}

playPauseDiv.addEventListener('click', togglePlay);
