const productos = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            const container = document.querySelector('.container-cards');
            json.forEach(elemento => {
                const card = document.createElement('div');
                card.classList.add('card-container');
                card.innerHTML = productCardTemplate;
                console.log(elemento)
                console.log(container)
                const header = card.querySelector('.header-card h3');
                const image = card.querySelector('.main-card img');
                const description = card.querySelector('.main-card p');
                header.textContent = elemento.title;
                image.src = elemento.image;
                description.textContent = elemento.description;

                container.appendChild(card);
            })
        })

}

const productCardTemplate = `
            <div class="body-card">
                <section class="header-card">
                    <h3></h3>
                </section>
                <section class="main-card">
                    <img src="" alt="imagen">
                    <p></p>
                </section>
                <hr>
                <section class="footer-card">
                    <button>Agregar</button>
                </section>
            </div>
`

export { productos };