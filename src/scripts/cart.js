const selectedProducts = [];
const cart = document.querySelector('.fas')
const cartList = document.querySelector('.cart-list')

const selectProduct = () => {
    const products = document.querySelectorAll('.addProduct')
    products.forEach( button => {
        button.addEventListener('click', () => {

            const cartList = document.querySelector('.cart-list');

            //const productoId = button.parentElement.parentElement.dataset.productId
            const productoImage = button.parentElement.parentElement.dataset.imagen
            const productoTile = button.parentElement.parentElement.dataset.title
            const productoPrice = button.parentElement.parentElement.dataset.price

            const cart = document.createElement('div');
            cart.classList.add('cart-body');
            cart.innerHTML = productCartTemplate;

            const imageList = document.querySelector('.image img')
            const titleList = document.querySelector('.details h5')
            const priceList = document.querySelector('.details p')

            imageList.scr = productoImage
            titleList.textContent = productoTile
            priceList.textContent = productoPrice 

            cartList.appendChild(cart)
/* 
            const newProduct = {
                productoId,
                productoImage,
                productoPrice,
                productoTile
            }

            if(!selectedProducts.includes(productoId)){
                selectedProducts.push(newProduct)
            }else{
                console.log('el poducto ya esta en la lista')
            } */
            console.log(imageList,
                titleList,
                priceList)
        })
    })
}

cart.addEventListener('click', () => {
    if(cartList.style.display === 'none'){
        cartList.style.display = 'block'
    }else{
        cartList.style.display = 'none'
    }
})


const productCartTemplate = `
            <div class="cart-body">
            <div class="image">
                <img src="">
            </div>
            <div class="details">
                <h5>Nombre producto</h5>
                <p>Precio</p>
            </div>
            <div class="trash">
                <button>Quitar</button>
            </div>
            </div>
            <div class="cart-footer">
            <button>Finalizar</button>
            <p>Total</p>
            <button>Limpiar Carrito</button>
            </div>
` 

export { selectedProducts, selectProduct}