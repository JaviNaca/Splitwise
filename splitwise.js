class Usuario {
    constructor(nombre, pathImg) {
        this.nombre = nombre;
        this.gastos = [];
        this.pathImg = pathImg;
    }
    // Completar con los métodos necesarios
}


class Gasto {
    constructor(titulo, monto, fecha) {
        this.titulo = titulo;
        this.monto = monto;
        this.fecha = fecha;
    }
    // Completar con los métodos necesarios
}

let inputNombre = document.getElementById('nombre');
let inputImporte = document.getElementById('importe');
let inputFecha = document.getElementById('fecha');
let inputUsuarios = document.getElementById('seleccionUsuarios');

let validar = document.getElementById('botonValidar');

validar.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputNombre.value !== "" && inputFecha.value !== "" && inputImporte.value !== "" && inputUsuarios.value !== ""){
        checkNombre(inputNombre);
        checkFecha(inputFecha);
        checkImporte(inputImporte);
        setTimeout(limpiarFormulario, 2000); //limpia el formulario 2 segundos después de mostrar los bordes rojos y verdes
    } else{
        alert('TODOS LOS CAMPOS SON OBLIGATORIOS!!!');
    } 
});

function checkNombre(inputNombre){
    let regex = /^[a-zA-Z0-9]{1,20}$/;
    if (regex.test(inputNombre.value)){
        inputNombre.classList.add("verde");
        inputNombre.classList.remove("rojo");
    } else {
        inputNombre.classList.remove("verde");
        inputNombre.classList.add("rojo");
    }
}

function checkImporte(inputImporte){
    let regex = /^(?:1000\.00|[0-9]{1,3}\.[0-9]{2})$/;
    if (regex.test(inputImporte.value)){
        inputImporte.classList.add("verde");
        inputImporte.classList.remove("rojo");
    } else {
        inputImporte.classList.remove("verde");
        inputImporte.classList.add("rojo");
    }
}

function checkFecha(inputFecha){
    let regex = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
    if (regex.test(inputFecha.value)){
        inputFecha.classList.add("verde");
        inputFecha.classList.remove("rojo");
    } else {
        inputFecha.classList.remove("verde");
        inputFecha.classList.add("rojo");
    }
}

function limpiarFormulario() {
    inputNombre.value = "";
    inputImporte.value = "";
    inputFecha.value = "";
    inputNombre.classList.remove("verde", "rojo");
    inputImporte.classList.remove("verde", "rojo");
    inputFecha.classList.remove("verde", "rojo");
}