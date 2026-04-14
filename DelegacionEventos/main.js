import { generarColorAleatorio, crearElementoCuadro } from "./js/utils.js";
const padre = document.getElementById("contenedor-padre")
const btnCrear = document.getElementById("btn-crear")
btnCrear.addEventListener("click", () => {
    const color = generarColorAleatorio()
    const nuevoCuadro = crearElementoCuadro(color)
    padre.appendChild(nuevoCuadro);
});