const selectedProducts = [];
const cart = document.querySelector('.shoping-cart')
const main = document.querySelector('#main-content')

const allProducts = () => {
    const products = document.querySelectorAll('.addProduct')
    products.forEach( button => {
        button.addEventListener('click', () => {
            selectedProducts.push(button.parentElement.parentElement)
        })
    })
}

cart.addEventListener('click', () => {
    const pop = document.createElement('div')
    pop.classList.add('cart')
    pop.innerHTML = cartTemplate
    console.log('hola')

    main.appendChild(pop)
})

const cartTemplate = `
        <h1>Hola</h1>
`

export { selectedProducts, allProducts }