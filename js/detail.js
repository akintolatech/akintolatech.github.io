
let productText = document.querySelector(".product-text");
let productImg = document.querySelector(".productimg");


window.localStorage.setItem("text", productText.textContent);
window.localStorage.setItem("image", productImg.src);

console.log(productImg.src);

