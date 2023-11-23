function makeFullScreen() {
  const video = document.getElementById('fullscreen-video');

  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
}
const videoElement = document.getElementById('fullscreen-video');
videoElement.addEventListener('click', makeFullScreen);
