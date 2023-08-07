import { starProducts } from "./stuffWeSell.js";

let productMarketHTML = " ";

for (let i = 0; i < starProducts.length; i++) {
    productMarketHTML +=
        "<div class='card col-lg-4'> " +
            "<img class = 'card-img-top' src = '"+starProducts[i].image.url+"' alt = '"+starProducts[i].image.alt+"' >" +
                "<div class='card-body'> " +
                    "<h5 class='card-title'>"+starProducts[i].name+"</h5> " +
                    "<p class='card-text'>"+starProducts[i].descriptor+"</p> " +
                "</div> " +
                "<div class='cart'>" +
                    "<H5 class='col-sm'> $"+starProducts[i].price+"</H5>" + 
                    "<a href='#' class='btn btn-primary col-sm'><i class='fa-solid fa-cart-shopping'></i> Add to Cart</a>" +
            "</div > "+
        "</div>";
}

console.log(starProducts);
document.getElementById('productMarket').innerHTML = productMarketHTML;