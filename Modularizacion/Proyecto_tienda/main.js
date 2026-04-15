import {productos} from "./js/productos.js"
import { agregarAlCarrito,obtenerTotal,limpiarCarrito,guardarCarrito,cargarCarrito,eliminarHistorial, setCarrito, carrito } from "./js/cartLogic.js"
import { mostrarProductos,pintarCarrito } from "./js/ui.js" // se llamaron todas las ufunciones y variables necesarias para la pagina

 const contenedorProds =document.querySelector(".grid")
 const listaCarritoUI = document.getElementById ("lista-carrito")
 const totalUI = document.getElementById ("precio-total")
 const btnLimpiar = document.getElementById ("btn-limpiar") // se hicieron todas las referencias al DOM, es decir se capturo los elemtos del html donde se visualizaran los cambios (son los puentes del JS con el HTML)
const datosPrevios = cargarCarrito();

if (datosPrevios.length > 0) {
   datosPrevios.forEach(p => agregarAlCarrito(p));
   pintarCarrito(datosPrevios, listaCarritoUI, totalUI);
}
console.log("datos previos :",datosPrevios);

 btnLimpiar.addEventListener("click",() => {
    const carritoVacio =limpiarCarrito()
    pintarCarrito(carritoVacio, listaCarritoUI, totalUI)
    eliminarHistorial()
    console.log ("carrito se ha limpiado con exito");
 });

 const comprarProducto = (producto) => {
    const nuevoCarrito = agregarAlCarrito(producto)
    pintarCarrito(nuevoCarrito, listaCarritoUI, totalUI)
    guardarCarrito(nuevoCarrito);
    console.log ("estado actual del carrito", nuevoCarrito);
 }
 mostrarProductos(productos,contenedorProds,comprarProducto);

