document.addEventListener("DOMContentLoaded", function () {
    const car = document.getElementById('car');
    const carSound = document.getElementById('carSound');
    let isMoving = false;

    function driveCar() {
        if (isMoving) {
            car.style.left = '100%';
            carSound.play(); // Play the car sound
            setTimeout(() => {
                car.style.left = '0';
                driveCar();
            }, 2000); // Adjust the duration as needed
        }
    }

    car.addEventListener('click', function () {
        isMoving = true;
        driveCar();
    });

    document.addEventListener('transitionend', function () {
        isMoving = false;
    });
});
 
