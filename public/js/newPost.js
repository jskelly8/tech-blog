// New Post Functionality
const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newPostTitle').value.trim();
    const content = document.querySelector('#newPostContent').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Create New Post Failed, Please try again.');
        };
    };
};

// Event Listener for 'Post' button
document
    .querySelector('#newPost')
    .addEventListener('submit', newPostFormHandler);