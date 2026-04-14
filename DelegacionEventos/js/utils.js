export function generarColorAleatorio() {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    return color.toUpperCase();
}

export function crearElementoCuadro(color) {
    const div = document.createElement("div");
    div.classList.add("cuadro")
    div.style.backgroundColor = color;
    div.innerText = color;
    return div;
}