// Delete Post Functionality 
const deletePost = async (post_id) => {
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete Post, Please try again.');
    };
};

const deletePostHandler = (event) => {
    if (event.target.matches('.deletePost')) {
        const post_id = event.target.getAttribute('data-post-id');
        deletePost(post_id);
    };
};

// Event Listener for 'Delete' button
document
    .addEventListener("click", deletePostHandler);