import { carrito } from "./cartLogic";

export function mostrarProductos(lista,contenedor, callbackclick) {
    contenedor.innerHTML="";

    lista.forEach(prod => {
        const tarjeta = document.createElement("div")
        tarjeta.className="tarjeta"
        tarjeta.innerHTML= `
            <div class="icon"> ${prod.imagen} <div>
            <h3> ${prod.nombre} <h3>
            <p> "$${prod.precio}<p>
            <button id= "btn-4${prod.id}"> agregar <button>
        `;
        contenedor.appendChild(tarjeta)

        Const boton = tarjeta.querySelector(`#btn-${prod.id}`);

        boton.addEventListener("click", () => callbackclick(prod));
    });
}

export Function pintaCarrito(carrito,contenedorLista,contenedorTotal)e