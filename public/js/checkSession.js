fetch('https://anti-pn-db.000webhostapp.com/CRUD/auth.php?action=checkSession')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'error') {
            // Redirige a otra página si el estado es 'error'
            window.location.href = './signin.html';
        } else {
            console.log('Success:', data);
            // Aquí puedes trabajar con los datos obtenidos si el estado no es 'error'
        }
    })