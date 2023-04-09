document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('.products')
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
        let response = await data.json();

        for (let i = 0; i < response.length; i++) {
            let description = response[i].description;
            let title = response[i].title;
            products.innerHTML += `
            <div class="product">
                    <img src="${response[i].images[1]}" alt="" class="product-img">
                        <div class="product-content">
                        <h2 class="product-title">${title.length > 15 ? title.substring(0,15).concat('...'):title}</h2>
                        <h4 class="product-category">${response[i].category.name}</h4>
                        <p class="product-description">${description.length > 20 ? description.substring(0, 20).concat('...more'):description}</p>
                        <div class="product-price-container">
                            <h3 class="product-price">€${response[i].price}</h3>
                            <a href="#!" data-productId="${response[i].id}" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>`;
        }
        } catch (e) {
            console.log('Si è verificato il seguente errore: ' + e);
        }
        
    };
    fetchProducts('https://api.escuelajs.co/api/v1/products'); //API
});