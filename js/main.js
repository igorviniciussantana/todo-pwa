// window.onload = () => {
//     "use strict";
//     if ("serviceWorker" in navigator) {
//       navigator.serviceWorker.register("./sw.js");
//     }
//   };


var valores = []
var id = 1;

function marcar(indice) {

    var element = document.getElementById(`${indice}`);


    if (element.style.textDecoration != 'line-through') {

        element.style.cssText = ' text-decoration: line-through; color: #AEAEAE; font-style: italic'

    } else {
        element.style.cssText = ' text-decoration: none;'

    }


}
function excluir(id){
    var elemento = document.getElementById(`${id}`)

    elemento.remove();

}



function atualizar(valor) {
    var lista = document.getElementById('lista');



    lista.insertAdjacentHTML('afterbegin', `
    
        <li id=${id}>
        <input type="checkbox" onclick="marcar(${id})"/>
        <span id=${id}>${valor}</span>
        <button onclick="excluir(${id})">Delete</button>
        </li>
        `)

    id++


}



function adicionar() {

    var input = document.getElementById('input');
    var lista = document.getElementById('lista');
    valores.push(input.value)

    atualizar(input.value)


  



}