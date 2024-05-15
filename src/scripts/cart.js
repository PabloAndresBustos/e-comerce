const cart = document.querySelector('.fas');
const cartList = document.querySelector('.cart-list');

const selectProduct = () => {
    const products = document.querySelectorAll('.addProduct');
    let suma = 0;
    products.forEach(button => {
        button.addEventListener('click', () => {
            const cartList = document.querySelector('.cart-body');
            const productoImage = button.parentElement.parentElement.dataset.imagen;
            const productoTile = button.parentElement.parentElement.dataset.title;
            const productoPrice = parseFloat(button.parentElement.parentElement.dataset.price);

            const cart = document.createElement('div');
            cart.classList.add('cart-details');
            cart.innerHTML = `
                <div class="image">
                    <img src="${productoImage}">
                </div>
                <div class="details">
                    <h5>${productoTile}</h5>
                    <p>Precio: ${productoPrice}</p>
                </div>
                <div class="trash">
                    <button class="remove">Quitar</button>
                </div>
            `;

            cartList.appendChild(cart);

            suma += productoPrice;
            const finalPrice = document.querySelector('.cart-footer p');
            finalPrice.textContent = 'Total: ' + suma.toFixed(2);
        });
    });

    // Asignar evento de clic a los botones "Quitar"
    cartList.addEventListener('click', event => {
        if (event.target.classList.contains('remove')) {
            const precioProducto = parseFloat(event.target.parentElement.previousElementSibling.querySelector('p').textContent.split(':')[1].trim());
            suma -= precioProducto;
            event.target.parentElement.parentElement.remove();
            const finalPrice = document.querySelector('.cart-footer p');
            finalPrice.textContent = 'Total: ' + suma.toFixed(2);
        }
    });
};

cart.addEventListener('click', () => {
    if (cartList.style.display === 'none') {
        cartList.style.display = 'block';
    } else {
        cartList.style.display = 'none';
    }
});

export { selectProduct };
