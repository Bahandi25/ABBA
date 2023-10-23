const newsCards = document.querySelectorAll('.card');
//retrieving all cards
newsCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });
  //adds event listener when mouse is pointing to the card

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
  //adds event listener when mouse is not pointing to the card
});
