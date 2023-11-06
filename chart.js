document.addEventListener('DOMContentLoaded', function () {
    const data = {
        labels: ['Ford', 'Toyota', 'Audi', 'Honda', 'Opel'],
        datasets: [{
            label: 'Car brands sales',
            data: [150, 370, 140, 290, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
    const barChartCanvas = document.getElementById('barChart').getContext('2d');
    new Chart(barChartCanvas, {
        type: 'bar',
        data: data,
    });
    const pieChartCanvas = document.getElementById('pieChart').getContext('2d');
    new Chart(pieChartCanvas, {
        type: 'pie',
        data: data,
    });
});
