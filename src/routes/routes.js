import { productos } from "../scripts/products.js";
/* Carga de paginas externas */
const pageLoad = (page) => {

    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
            console.log('Error al cargar la pagina', error);
        })

}

/* Manejador para la navegacion */
document.addEventListener('DOMContentLoaded', () => {
    
    const navOptions = document.querySelectorAll('nav li');
    const end = document.querySelector('.end')

    navOptions.forEach( ancord => {
        ancord.addEventListener('click', (event) => {
            event.preventDefault();
            const href = ancord.getAttribute('href').substring(1);

            /* Switch para el cambio de pagina */
            switch(href){
                case 'home':
                    pageLoad('src/views/home.html')
                    break;
                case 'contact': 
                    pageLoad('src/views/contact.html')
                    break;
                case 'products':
                    pageLoad('src/views/products.html')
                    productos();
                    break;
                default:
                    pageLoad('src/views/home.html')
            }
        })
    })

    end.addEventListener('click', (event) => {
        event.preventDefault();
        pageLoad('src/views/end.html')
    })
})

/* Pagina por defecto */
window.onload = () => {
    pageLoad('src/views/home.html')
}