import { allPets } from "./stuffWeSell.js";

let petMarketHTML = " ";

for (let i = 0; i < allPets.length; i++) {
    petMarketHTML +=
        "<div class='card col-lg-4'> " +
            "<img class = 'card-img-top' src = '"+allPets[i].image.url+"' alt = '"+allPets[i].image.alt+"' >" +
                "<div class='card-body'> " +
                    "<h5 class='card-title'>"+allPets[i].name+"</h5> " +
                    "<p class='card-text'>"+allPets[i].descriptor+"</p> " +
                "</div> " +
                "<div class='cart'>" +
                    "<H5 class='col-sm'> $"+allPets[i].price+"</H5>" + 
                    "<a href='#' class='btn btn-primary col-sm'><i class='fa-solid fa-cart-shopping'></i> Add to Cart</a>" +
            "</div > "+
        "</div>";
}

console.log(allPets);
document.getElementById('petMarket').innerHTML = petMarketHTML;