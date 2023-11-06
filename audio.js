document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');

  const songs = ['Michael Jackson - Black or White (Single Version).mp3', 'Fall Out Boy - Thnks fr th Mmrs.mp3', 'Gorillaz – Tranz.mp3'];
  let currentSongIndex = 0;

  function playSong() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
  }

  document.getElementById('playBtn').addEventListener('click', function () {
    playSong();
  });

  document.getElementById('pauseBtn').addEventListener('click', function () {
    audioPlayer.pause();
  });

  document.getElementById('nextBtn').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
  });

  document.getElementById('prevBtn').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong();
  });
});
