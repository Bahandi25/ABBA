document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let timeLeft = 0;

    const timerElement = document.getElementById('timer');
    const startButton = document.getElementById('start-btn');

    startButton.addEventListener('click', function () {
      const duration = prompt('Enter timer duration in seconds:');
      if (duration !== null && !isNaN(duration) && duration > 0) {
        startTimer(duration);
      } else {
        alert('Please enter a valid duration.');
      }
    });

    function startTimer(duration) {
      clearInterval(timer);
      timeLeft = duration;

      timer = setInterval(function () {
        updateTimer();
        if (timeLeft === 0) {
          clearInterval(timer);
          alert('Timer expired!');
        }
      }, 1000);
    }

    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      const minutesStr = String(minutes).padStart(2, '0');
      const secondsStr = String(seconds).padStart(2, '0');

      timerElement.textContent = `${minutesStr}:${secondsStr}`;
      timeLeft--;
    }
  });
