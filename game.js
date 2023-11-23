document.addEventListener('DOMContentLoaded', function () {
  const images = [
    { src: 'purepng.com-audi-car-logologocar-brand-logoscarsaudi-1701527428038cl0rr.png', category: 'Audi' },
    { src: 'citroen-car-logo-png-brand-image-21.png', category: 'Citroen' },
    { src: 'logo-Tata-Motors.png', category: 'Tata' },
    { src: 'pngimg.com - car_logo_PNG1667.png', category: 'Volkswagen' },
  ];

  images.sort(() => Math.random() - 0.5);

  const imageContainer = document.getElementById('image-container');
  const targetBoxes = document.querySelectorAll('.target-box');

  for (let i = 0; i < 4; i++) {
    const img = document.createElement('img');
    img.src = images[i].src;
    img.draggable = true;
    img.dataset.category = images[i].category;
    img.classList.add('draggable');
    imageContainer.appendChild(img);
  }

  const draggableElements = document.querySelectorAll('.draggable');

  draggableElements.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  targetBoxes.forEach((targetBox) => {
    targetBox.addEventListener('dragover', dragOver);
    targetBox.addEventListener('dragenter', dragEnter);
    targetBox.addEventListener('dragleave', dragLeave);
    targetBox.addEventListener('drop', drop);
  });

  function dragStart(e) {
    e.dataTransfer.setData('text', e.target.dataset.category);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
  }

  function dragLeave() {
    this.classList.remove('hovered');
  }

  function drop(e) {
    e.preventDefault();
    this.classList.remove('hovered');
    const draggedCategory = e.dataTransfer.getData('text');
    const targetBoxCategory = this.dataset.target;

    if (draggedCategory === targetBoxCategory) {
      this.classList.add('correct');
    } else {
      this.classList.add('wrong');
    }
  }
});
