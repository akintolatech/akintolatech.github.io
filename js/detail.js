


function assignId (id) {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.sessionStorage.setItem("id", id);
    // alert("commited");
    window.location.href='product-detail.html';
}


// console.log(window.localStorage.getItem("id"));
