// Sign up functionality
const formHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users/signup', { // ERROR HERE --------------------------
            method: postMessage,
            body: JSON.stringify({ name, email, password}),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('SignUp Failed, Please try again.')
        };
    };
};

// Event Listener for 'Register' button
document
    .querySelector('#signup')
    .addEventListener('submit', formHandler);