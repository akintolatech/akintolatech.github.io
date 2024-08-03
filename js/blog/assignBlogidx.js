// Function to assign the blog detail id to its
// associated element using local storage

function assignBlogIdx (id) {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.sessionStorage.setItem("blog_id", id);
    // alert("commited");
    window.location.href='pages/blog-detail.html';
}

