const video = document.getElementById('myVideo');
const playPauseDiv = document.getElementById('play-pause-btn');
const cancelBtn = document.getElementById('x-mark');
const biggerBanners = document.querySelectorAll('.bigger-movie-banners img');
const dots = document.querySelector('.carousel-dots');
const footerMenus = document.querySelectorAll('.heading-div');
const storeBtn = document.querySelector('.storeBtn');
const macBtn = document.querySelector('.macBtn');
const ipadBtn = document.querySelector('.iPadBtn');
const iphoneBtn = document.querySelector('.iPhoneBtn');
const watchBtn = document.querySelector('.watchBtn');
const visionBtn = document.querySelector('.visionBtn');
const airpodsBtn = document.querySelector('.airpodsBtn');
const appleTvBtn = document.querySelector('.appleTvBtn');
const entertainmentBtn = document.querySelector('.entertainmentBtn');
const accessoriesBtn = document.querySelector('.accessoriesBtn');
const supportBtn = document.querySelector('.supportBtn');

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

function toggleMenu() {
    const menuItems = this.nextElementSibling;
    const caretIcon = this.querySelector('i');

    if (getComputedStyle(menuItems).display === 'none') {
        menuItems.style.display = 'flex';
        menuItems.style.flexDirection = 'column';
        caretIcon.className = 'fas fa-angle-up';
    } else {
        menuItems.style.display = 'none';
        caretIcon.className = 'fas fa-angle-down';
    }
}

function toggleShopMenu() {
    const shopMenu = document.querySelector('.shop-menu');
    shopMenu.classList.toggle('active');
}

function toggleMacMenu() {
    const macMenu = document.querySelector('.explore-mac');
    macMenu.classList.toggle('active');
}

function toggleIpadMenu() {
    const ipadMenu = document.querySelector('.explore-ipad');
    ipadMenu.classList.toggle('active');
}

function toggleIphoneMenu() {
    const iphoneMenu = document.querySelector('.explore-iphone');
    iphoneMenu.classList.toggle('active');
}

function toggleWatchMenu() {
    const watchMenu = document.querySelector('.explore-watch');
    watchMenu.classList.toggle('active');
}

function toggleVisionMenu() {
    const visionMenu = document.querySelector('.explore-vision');
    visionMenu.classList.toggle('active');
}

function toggleAirpodsMenu() {
    const airpodsMenu = document.querySelector('.explore-airpods');
    airpodsMenu.classList.toggle('active');
}

function toggleTvMenu() {
    const tvMenu = document.querySelector('.explore-tv');
    tvMenu.classList.toggle('active');
}

function toggleEntertainmentMenu() {
    const entertainmentMenu = document.querySelector('.explore-entertainment');
    entertainmentMenu.classList.toggle('active');
}

function toggleAccessoriesMenu() {
    const accessoriesMenu = document.querySelector('.shop-accessories');
    accessoriesMenu.classList.toggle('active');
}

function toggleSupportMenu() {
    const supportMenu = document.querySelector('.explore-support');
    supportMenu.classList.toggle('active');
}

playPauseDiv.addEventListener('click', togglePlay);
cancelBtn.addEventListener('click', closeFirstDivHandler);
playPauseDiv.addEventListener('click', toggleCarousel);
footerMenus.forEach(footerMenu => {
    footerMenu.addEventListener('click', toggleMenu);
});
storeBtn.addEventListener('mouseenter', toggleShopMenu)
storeBtn.addEventListener('mouseleave', toggleShopMenu);

macBtn.addEventListener('mouseover', toggleMacMenu);
macBtn.addEventListener('mouseleave', toggleMacMenu);

ipadBtn.addEventListener('mouseover', toggleIpadMenu);
ipadBtn.addEventListener('mouseleave', toggleIpadMenu);

iphoneBtn.addEventListener('mouseover', toggleIphoneMenu);
iphoneBtn.addEventListener('mouseleave', toggleIphoneMenu);

watchBtn.addEventListener('mouseover', toggleWatchMenu);
watchBtn.addEventListener('mouseleave', toggleWatchMenu);

visionBtn.addEventListener('mouseover', toggleVisionMenu);
visionBtn.addEventListener('mouseleave', toggleVisionMenu);

airpodsBtn.addEventListener('mouseover', toggleAirpodsMenu);
airpodsBtn.addEventListener('mouseleave', toggleAirpodsMenu);

appleTvBtn.addEventListener('mouseover', toggleTvMenu);
appleTvBtn.addEventListener('mouseleave', toggleTvMenu);

entertainmentBtn.addEventListener('mouseover', toggleEntertainmentMenu);
entertainmentBtn.addEventListener('mouseleave', toggleEntertainmentMenu);

accessoriesBtn.addEventListener('mouseover', toggleAccessoriesMenu);
accessoriesBtn.addEventListener('mouseleave', toggleAccessoriesMenu);

supportBtn.addEventListener('mouseover', toggleSupportMenu);
supportBtn.addEventListener('mouseleave', toggleSupportMenu);

startCarousel();
updateDots(currentBigBanner);