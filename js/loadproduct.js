// window.onload = function () {
     
//     let ProductId = window.localStorage.getItem(id);
//     let productObject = products[ProductId];
//     return productObject;

// };

// Web portfolio details
let productImageLink = "../img/prod/pf.jpg";
let productText = "Web Portfolio";
let productDesc = "Simple web porfolio for freelancers";
let productPrice = "$50";
let productLink = "https://buymeacoffee.com/akintolate6/e/200275";

let productImageLink2 = "../img/prod/auth.jpg";
let productText2 = "Authentication pages";
let productDesc2 = "Simple authentication pages that implements login, register and dashboard functionality";
let productPrice2 = "$20";
let productLink2 = "dhjcjdhcjhdjh";

// Product dataset
let products = {
    1 : [productImageLink, productText, productDesc, productPrice, productLink ],
    2 : [productImageLink2, productText2, productDesc2, productPrice2, productLink2 ],
}


let ProductId = window.sessionStorage.getItem("id");
let productObject = products[ProductId];

let productImgElement = document.querySelector(".product-img");
let productTitleElement = document.querySelector(".product-title");
let productDescElement = document.querySelector(".product-desc");
let productPriceElement = document.querySelector(".product-price");
let productLinkElement = document.querySelector(".product-link");

// load data
productImgElement.src=productObject[0];
productTitleElement.innerHTML = productObject[1];
productDescElement.innerHTML = productObject[2];
productPriceElement.textContent = productObject[3];
productLinkElement.href = productObject[4];
