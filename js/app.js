let recetas = []
let ingredientes = []

//Declara las tarjetas donde ira la informacion
const contenido = document.getElementById('contenido')
const ingre = document.getElementById('ingredientes')

const receta = document.getElementById('receta').content
const ingrediente = document.getElementById('ingrediente').content

const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () =>{
    cargaRecetas()
})

//Carga la api y la guarda en un arreglo que se puede usar
const cargaRecetas = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28d5cb6662msh6a31b97dfda3bc2p1d03cfjsn36ad2bbb697d',
            'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
        }
    };
    
    fetch('https://random-recipes.p.rapidapi.com/ai-quotes/1', options)
        .then(response => response.json())
        .then(response => {
            recetas = response
            ingredientes = response
            dibujarRecetas()
            console.log(response)
            
        })
        .catch(err => console.error(err));
}

//Envia la informacion en html
const dibujarRecetas = () =>{

    recetas.forEach((item) =>{
        receta.querySelector('img').setAttribute('src', item.image)
        receta.querySelector('h1').textContent = item.title

        const clone = receta.cloneNode(true)
        fragment.appendChild(clone)
    })

    ingredientes.forEach((item) =>{
        ingrediente.querySelector('h2').textContent = item.title
        ingrediente.querySelector('h3').textContent = item.ingredients

        const cloneIngre = ingrediente.cloneNode(true)
        fragment.appendChild(cloneIngre)
    })


    contenido.appendChild(fragment)
    ingre.appendChild(fragment)

}
