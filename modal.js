document.addEventListener('DOMContentLoaded', function () {
  const contactBtn = document.getElementById('contactBtn');
  const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));

  contactBtn.addEventListener('click', function () {
    contactModal.show();
  });
});
