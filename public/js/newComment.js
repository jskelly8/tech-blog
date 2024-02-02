// New Comment functionality
const newCommentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#postComment').value.trim();
    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Comment Post Failed, Please try again.');
        };
    };
};

// Event Listener for 'Post' button
document
    .querySelector('#commentForm')
    .addEventListener('submit', newCommentFormHandler);