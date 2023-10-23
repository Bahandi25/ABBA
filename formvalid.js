function validateForm() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        emailInput.classList.add('is-invalid');
    } else {

        emailInput.classList.remove('is-invalid');

        $('#successModal').modal('show');
    }
}
