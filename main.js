/////// DOM JS
window.onload = function () {
  if (cajaSecreta.classList.contains("visible")) {
    botonRevelar.textContent = "Ocultar Secreto";
  }
};

///Manipular Titulo
const titulo = document.getElementById("Titulo");
const boton = document.getElementById("btn-magia");

boton.addEventListener("click", () => {
  titulo.textContent = "!Hola Mundo Manipulando el DOM";
});

///Manipular Atributos
let estaEncendido = false;

const foco = document.getElementById("foco");
const btnFoco = document.getElementById("btn-foco");

btnFoco.addEventListener("click", () => {
  if (estaEncendido === false) {
    foco.setAttribute("src", "img/foco prendido.jpg");
    btnFoco.textContent = "Apagar Luz";
    estaEncendido = true;
  } else {
    foco.setAttribute("src", "img/foco apgado.jpg");
    btnFoco.textContent = "Encender Luz";
    estaEncendido = false;
  }
});

///Manipualr Estilos

const botonRevelar = document.querySelector("#btn-revelar");
const cajaSecreta = document.querySelector("#secreto");

botonRevelar.addEventListener("click", () => {
  cajaSecreta.classList.toggle("visible");
  botonRevelar.textContent = "Ocultar Secreto";
  cajaSecreta.classList.add("rojo");
});

////// Agregar Elementos

const btnCrear = document.querySelector("#btn-crear");
const Contenedor = document.querySelector("#contenedor-tarjetas");
let contador = 1;
btnCrear.addEventListener("click", () => {
  //1. Crear el cuerpo de la tarjeta

  const tarjeta = document.createElement("div");
  tarjeta.style.border = "2px solid violet";
  tarjeta.style.padding = "10px";
  tarjeta.style.margin = "10px 0";

  /// Crear los hijos

  const titulo = document.createElement("h3");
  titulo.textContent = "Usuario Nuevo " + contador;

  const parrafo = document.createElement("p");
  parrafo.textContent = "Este Usuario fue generado con Document.createElement";

  //Ensamblar

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(parrafo);
  //Insertar Tarjeta en la panatalla
  Contenedor.appendChild(tarjeta);
  contador++;
});

//// Validar en tiempo real

const inputPassword = document.querySelector("#input-password");
const MensajeError = document.querySelector("#mensaje-error");

inputPassword.addEventListener("keyup", () => {
  const longitud = inputPassword.value.length;
  if (longitud < 8) {
    MensajeError.textContent =
      "la contraseña es muy corta. Llevas " + longitud + " letras";
    MensajeError.style.color = "red";
  } else {
    MensajeError.textContent = "Contrase valida y fuerte!";
    MensajeError.style.color = "green";
  }
});
