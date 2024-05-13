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

/* Carga de los scripts */
const scriptLoad = (nameScript) => {
    const script = document.createElement('script');
    script.src = nameScript;
    document.body.appendChild(script);
}

/* Manejador para la navegacion */
document.addEventListener('DOMContentLoaded', () => {
    
    const navOptions = document.querySelectorAll('nav li');

    navOptions.forEach( ancord => {
        ancord.addEventListener('click', (event) => {
            event.preventDefault();
            const href = ancord.getAttribute('href').substring(1);

            /* Switch para el cambio de pagina */
            switch(href){
                case 'home':
                    pageLoad('home.html')
                    break;
                case 'contact': 
                    pageLoad('contact.html')
                    break;
                case 'products':
                    pageLoad('products.html')
                    productos();
                    break;
                default:
                    pageLoad('home.html')
            }
        })
    })
})

/* Pagina por defecto */
window.onload = () => {
    pageLoad('home.html')
}