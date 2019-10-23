//import { respuesta } from './js/utils';

console.log("Herramientas front-end para dummies:");
console.log("Inicio de la aplicacion.");


/** Funcion que se ejecuta en los diferentes test que hay en la web,
 * se encarga, en funcion de si la respuesta es correcta o no, mostrar
 * diferentes animaciones en la tarjeta que contiene la pregunta y colorearla
 * para que el usuario sepa si ha acertado o no
 */

var respuesta = function() {
    var correcta = this.getAttribute("es-correcta");
    console.log(this);
    console.log(this.parentElement);
    console.log('tarjeta');
    console.log(this.parentElement.parentElement);
    const tarjeta = this.parentElement.parentElement;
    
    tarjeta.classList.remove("shake-horizontal");
    if( correcta == 1 ) {
        alert('correcto');
    } else {
        //alert('error');
        tarjeta.classList.add("shake-horizontal");
    }
};

var respuestas = document.getElementsByClassName("respuesta");
Array.from(respuestas).forEach(function(r) {
    r.addEventListener('click', respuesta);
});