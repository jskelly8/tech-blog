// Login functionality
const logInFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (name && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST', 
            body: JSON.stringify({ name, password }),
            headers: { 'Content-type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in, Please try again.');
        };
    };
};

// Event Listener for 'Login' button
document
    .querySelector('#login')
    .addEventListener('submit', logInFormHandler);
