import { carrito } from "./cartLogic.js"; 

export function mostrarProductos(lista, contenedor, callbackclick) {
    contenedor.innerHTML = "";

    lista.forEach(prod => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        
        tarjeta.innerHTML = `
            <div class="icon"> ${prod.imagen} </div>
            <h3> ${prod.nombre} </h3>
            <p> $${prod.precio} </p>
            <button id="btn-${prod.id}"> agregar </button>
        `;
        contenedor.appendChild(tarjeta);

        const boton = tarjeta.querySelector(`#btn-${prod.id}`);

        boton.addEventListener("click", () => callbackclick(prod));
    });
}
export function pintarCarrito(carrito , contenedorLista, contenedorTotal) {
    contenedorLista.innerHTML = ""
    carrito.forEach(item => {
        const p =document.createElement("p")
        p.textContent= `✅${item.nombre}- $${item.precio}`;
        contenedorLista.appendChild(p);
    });

    const total = carrito.reduce((acumulador, p) => acumulador+p.precio, 0);
    contenedorTotal.innerText = `$${total}`;
    }


