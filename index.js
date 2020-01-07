import Prism from "prismjs";

var lozad = require("lozad");

Prism.highlightAll();
console.log(Prism);

console.log("Herramientas front-end para dummies:");
console.log("Inicio de la aplicacion.");

//Carga asincrona de la fuente de google font usando webfontloader
//https://www.npmjs.com/package/webfontloader
var WebFont = require("webfontloader");

WebFont.load({
  google: {
    families: ["Open Sans", "Raleway"]
  }
});
//carga asincrona de la fuente
(function(d) {
  var wf = d.createElement("script"),
    s = d.scripts[0];
  wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
  wf.async = true;
  s.parentNode.insertBefore(wf, s);
})(document);

/** Funcion que se ejecuta en los diferentes test que hay en la web,
 * se encarga, en funcion de si la respuesta es correcta o no, mostrar
 * diferentes animaciones en la tarjeta que contiene la pregunta y colorearla
 * para que el usuario sepa si ha acertado o no
 */

var respuesta = function() {
  var correcta = this.getAttribute("es-correcta");
  const tarjeta = this.parentElement.parentElement;

  tarjeta.classList.remove("shake-horizontal");
  tarjeta.classList.remove("jello-horizontal");
  tarjeta.firstElementChild.classList.remove("bg-success");
  tarjeta.firstElementChild.classList.remove("bg-danger");
  var respuestas = tarjeta.getElementsByClassName("respuesta");
  for (var i = 0; i < respuestas.length; i++) {
    respuestas.item(i).classList.remove("font-weight-bold");
  }

  this.classList.add("font-weight-bold");
  if (correcta == 1) {
    tarjeta.classList.add("jello-horizontal");
    tarjeta.firstElementChild.classList.add("bg-success");
  } else {
    tarjeta.classList.add("shake-horizontal");
    tarjeta.firstElementChild.classList.add("bg-danger");
  }
};

var respuestas = document.getElementsByClassName("respuesta");
Array.from(respuestas).forEach(function(r) {
  r.addEventListener("click", respuesta);
});
