const selectedProducts = [];

const allProducts = () => {
    const products = document.querySelectorAll('.addProduct')
    products.forEach( button => {
        button.addEventListener('click', () => {
            selectedProducts.push(button.parentElement.parentElement)
        })
    })
}

export { selectedProducts, allProducts }