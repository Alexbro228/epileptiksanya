// Array of image and audio files
const images = [
    'картинка1.jpg', 'картинка2.jpg', 'картинка3.jpg', 'картинка4.jpg',
    'картинка5.jpg', 'картинка6.jpg', 'картинка7.jpg', 'картинка8.jpg',
    'картинка9.jpg', 'картинка10.jpg'
];
const audios = [
    'аудио1.mp3', 'аудио2.mp3', 'аудио3.mp3', 'аудио4.mp3',
    'аудио5.mp3', 'аудио6.mp3', 'аудио7.mp3', 'аудио8.mp3',
    'аудио9.mp3', 'аудио10.mp3'
];

// Colors for background animation
const colors = ['#f8d8d8', '#ffb6c1', '#ff69b4', '#ff1493', '#f8d8d8'];

let colorInterval;

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function showMedia() {
    // Get random image and audio
    const randomImage = getRandomElement(images);
    const randomAudio = getRandomElement(audios);

    // Get image and audio elements
    const imageElement = document.getElementById('displayed-image');
    const audioElement = document.getElementById('audio-player');
    const bodyElement = document.body;

    // Set the source for the image and audio
    imageElement.src = randomImage;
    audioElement.src = randomAudio;

    // Reset animation
    imageElement.style.animation = 'none';
    setTimeout(() => {
        imageElement.style.animation = '';
    }, 10);

    // Show the image overlay
    document.getElementById('image-overlay').style.display = 'flex';

    // Play the audio
    audioElement.play();

    // Change background color rapidly
    let colorIndex = 0;
    colorInterval = setInterval(() => {
        bodyElement.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 100); // Change color every 100 milliseconds
}

function showNextMedia() {
    // Get image and audio elements
    const imageElement = document.getElementById('displayed-image');
    const audioElement = document.getElementById('audio-player');

    // Get new random image and audio
    const randomImage = getRandomElement(images);
    const randomAudio = getRandomElement(audios);

    // Set the new source for the image and audio
    imageElement.src = randomImage;
    audioElement.src = randomAudio;

    // Reset animation
    imageElement.style.animation = 'none';
    setTimeout(() => {
        imageElement.style.animation = '';
    }, 10);

    // Play the new audio
    audioElement.play();
}

function closeImage() {
    // Hide the image overlay
    document.getElementById('image-overlay').style.display = 'none';

    // Stop changing colors
    clearInterval(colorInterval);

    // Reset background color
    document.body.style.backgroundColor = '#f8d8d8'; // Initial color
}
