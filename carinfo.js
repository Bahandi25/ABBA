const car = {
  price: '16.500.000 Tenge',
  year: 2018,
  generation: 'X540(First)',
  engine: '2.0 L (249 hp)',
  acceleration: '7 seconds',
  mileage: '51,718 km',
  transmission: 'Automatic transmission',
  color: 'White',
  drive: 'Full'
};

const carInfoContainer = document.getElementById('carInfo');
carInfoContainer.innerHTML = `
  <p>-Price: ${car.price}<br>
  -Year: ${car.year}<br>
  -Generation: ${car.generation}<br>
  -Engine: ${car.engine}<br>
  -Acceleration to 100 km/h: ${car.acceleration}<br>
  -Mileage: ${car.mileage}<br>
  -Transmission: ${car.transmission}<br>
  -Color: ${car.color}<br>
  -Drive: ${car.drive}</p>
`;
