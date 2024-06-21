document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            fetch('https://anti-pn-db.000webhostapp.com/CRUD/auth.php?action=login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(function(data) {
                if (data.status === 'success') {
                    console.log('Logged in successfully:', data);
                    // Redirigir o hacer algo después del login exitoso
                    window.location.href = './app';
                } else {
                    console.error('Login failed:', data.message);
                }
            })
            .catch(function(error) {
                console.error('Fetch error:', error);
            });
        });
    }
});
