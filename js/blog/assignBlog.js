// Function to assign the blog detail id to its
// associated element using local storage

function assignBlogId (id) {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.sessionStorage.setItem("blog_id", id);
    // alert("commited");
    window.location.href='blog-detail.html';
}

