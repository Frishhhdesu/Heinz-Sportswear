document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    const validUsername = 'Irishfermin';
    const validPassword = '123';

    if (username === validUsername && password === validPassword) {
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', username);
        window.location.href = 'content.html';
        alert("You have succesfully logged in!");
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

