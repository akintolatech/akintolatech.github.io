let webPortfolioText = "Simple web porfolio fo freelancers";
let webDesc = "Simple web porfolio fo freelancers";
let webPrice = "Simple web porfolio fo freelancers";
let webLink = "dhjcjdhcjhdjh"

let products = {
    1 : ["Web portfolio", webPortfolioText, webPrice, webLink ],
    2 : ["Web portfolio", webPortfolioText, webPrice, webLink ],
}

function LoadProduct(id) {
    let ProductId = localStorage.getItem(id);
    let productObject = products[ProductId];

    return productObject;
}

function AssignId (id) {
    localStorage.setItem("id", 1);
    alert("commited");
}

console.log(LoadProduct(1));
