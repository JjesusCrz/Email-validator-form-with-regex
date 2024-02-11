document.getElementById('emailForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var email = emailInput.value.trim();
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        emailError.textContent = 'O campo de e-mail não pode estar vazio.';
        event.preventDefault();
    } else if (!re.test(email)) {
        emailError.textContent = 'Por favor, insira um endereço de e-mail válido.';
        event.preventDefault();
    } else {
        emailError.textContent = '';
    }
});
