// Edit Post Functionality
const editPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#editPostTitle').value.trim();
    const content = document.querySelector('#editPostContent').value.trim();
    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];

    if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Edit Post Failed, Please try again.');
        };
    };
};

// Event Listener for 'Update Post' button
document
    .querySelector('#editPost')
    .addEventListener('submit', editPostFormHandler);
