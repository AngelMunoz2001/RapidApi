//Declara las tarjetas donde ira la informacion
const principal = document.getElementById('principal')

const listaIngredientes = document.getElementById('ingredientes')
const listaInstrucciones = document.getElementById('instrucciones')

const receta = document.getElementById('receta').content
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
            recetaResponse = response[0]
            dibujarRecetas(recetaResponse)
        
        })
        .catch(err => console.error(err));
}

let nuevaReceta = document.getElementById('nuevaReceta');
nuevaReceta.addEventListener('click', _ => {
            location.reload();
})

//Envia la informacion en html
const dibujarRecetas = (recetaRes) =>{
    console.log(recetaRes)
    ingredientes = []
    ingredientes = recetaRes.ingredients

    instrucciones = []
    instrucciones = recetaRes.instructions
    
    receta.querySelector('h2').textContent = recetaRes.title
    receta.querySelector('img').setAttribute('src', recetaRes.image)
  
    const clone = receta.cloneNode(true)
    fragment.appendChild(clone)
    principal.appendChild(fragment)
    dibujaIngredientes(ingredientes)
    dibujaInstrucciones(instrucciones)
    
}



const dibujaIngredientes =(ingredientes) =>{
    ingredientes.forEach(ingrediente => {
        const itemIngrediente = document.createElement('li')
        itemIngrediente.textContent = ingrediente
        listaIngredientes.appendChild(itemIngrediente)
    });
}

const dibujaInstrucciones = (instrucciones) =>{
    instrucciones.forEach(instruccion =>{
        const creaInstrucciones = document.createElement('li')
        creaInstrucciones.textContent = instruccion.text
        listaInstrucciones.appendChild(creaInstrucciones)
    })
}

