const parrafo = document.querySelector('p');
const boton = document.querySelector('button');
const cont = document.querySelector('.container');
const h1 = document.querySelector('h1');

parrafo.innerText = generarColor();
    cont.style.backgroundColor = parrafo.textContent;
    h1.style.color = parrafo.textContent;

boton.addEventListener('click', ()=>{
    parrafo.innerText = generarColor();
    cont.style.backgroundColor = parrafo.textContent;
    h1.style.color = parrafo.textContent;
})

function generarColor(){
    const caracteres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for(let i = 0; i < 6; i++){
        let aleatorio = Math.floor(Math.random()*caracteres.length)
        color += (caracteres[aleatorio]);
    }
    return color;
}