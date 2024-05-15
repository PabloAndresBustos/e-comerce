import { selectProduct } from "./cart.js";

const productos = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {

            const container = document.querySelector('.container-cards');

            json.forEach(elemento => {

                const card = document.createElement('div');
                card.classList.add('card-container');
                card.innerHTML = productCardTemplate;
                card.querySelector('.body-card').dataset.productId = elemento.id;
                card.querySelector('.body-card').dataset.price = elemento.price;
                card.querySelector('.body-card').dataset.imagen = elemento.image;
                card.querySelector('.body-card').dataset.title = elemento.title;

                const header = card.querySelector('.header-card h3');
                const image = card.querySelector('.main-card img');
                const description = card.querySelector('.description');
                const price = card.querySelector('.price');

                header.textContent = elemento.title;
                image.src = elemento.image;
                description.textContent = elemento.description;
                price.textContent = 'Precio: ' + elemento.price;
            
                container.appendChild(card);

            })

            selectProduct();
        })
}

const productCardTemplate = `
            <div class="body-card" data-product-id="">
                <section class="header-card">
                    <h3></h3>
                </section>
                <section class="main-card">
                    <img src="">
                    <p class="description"></p>
                    <p class="price"></p>
                </section>
                <section class="footer-card">
                    <button class="addProduct">Agregar</button>
                </section>
            </div>
`

export { productos };