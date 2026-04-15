import { generarColorAleatorio, crearElementoCuadro } from "./js/utils.js";
const padre = document.getElementById("contenedor-padre")
const btnCrear = document.getElementById("btn-crear")
btnCrear.addEventListener("click", () => {
    const color = generarColorAleatorio()
    const nuevoCuadro = crearElementoCuadro(color)
    padre.appendChild(nuevoCuadro);
});

padre.addEventListener("click", (event) => {
    const elemento = event.target;

    if (elemento.classList.contains("cuadro")) {
        setTimeout(()=> elemento.remove(),300)
    }


}

)
const titulo = document.getElementById("titulo1")
titulo.classList.add("titulo2");
