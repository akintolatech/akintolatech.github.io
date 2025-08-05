// Function to assign the project detail id to its
// associated element using local storage

function assignProjectIdx(id) {
    window.sessionStorage.clear();
    window.sessionStorage.setItem("project_id", id)
    // alert("Commited")
    window.location.href='pages/project/project-detail.html';
}

function assignProjectItem(id) {
    window.sessionStorage.clear();
    window.sessionStorage.setItem("project_id", id)
    // alert("Commited")
    window.location.href='../../pages/project/project-detail.html';
}

