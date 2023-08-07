import { allProducts } from "./stuffWeSell.js";

let productMarketHTML = " ";

for (let i = 0; i < allProducts.length; i++) {
    productMarketHTML +=
        "<div class='card col-lg-4'> " +
            "<img class = 'card-img-top' src = '"+allProducts[i].image.url+"' alt = '"+allProducts[i].image.alt+"' >" +
                "<div class='card-body'> " +
                    "<h5 class='card-title'>"+allProducts[i].name+"</h5> " +
                    "<p class='card-text'>"+allProducts[i].descriptor+"</p> " +
                "</div> " +
                "<div class='cart'>" +
                    "<H5 class='col-sm'> $"+allProducts[i].price+"</H5>" + 
                    "<a href='#' class='btn btn-primary col-sm'><i class='fa-solid fa-cart-shopping'></i> Add to Cart</a>" +
            "</div > "+
        "</div>";
}

console.log(allProducts);
document.getElementById('productMarket').innerHTML = productMarketHTML;