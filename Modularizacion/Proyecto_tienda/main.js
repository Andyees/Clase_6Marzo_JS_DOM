import {productos} from "./js/productos.js"
import { agregarAlCarrito,obtenerTotal,limpiarCarrito } from "./js/cartLogic.js"
import { mostrarProductos,pintarCarrito } from "./js/ui.js" // se llamaron todas las ufunciones y variables necesarias para la pagina

 const contenedorProds =document.getElementById("contenedor-productos")
 const listaCarritoUI = document.getElementById ("lista-carrito")
 const totalUI = document.getElementById ("precio-total")
 const btnLimpiar = document.getElementById ("btn-limpiar") // se hicieron todas las referencias al DOM, es decir se capturo los elemtos del html donde se visualizaran los cambios (son los puentes del JS con el HTML)

 btnLimpiar.addEventListener("click",() => {
    const carritoVacio =limpiarCarrito()
    pintarCarrito(carritoVacio,listaCarritoUI,totalUI)
    console.log ("carrito se ha limpiado con exito");
 });

 const comprarProducto = (producto) => {
    const nuevoCarrito = agregarAlCarrito(producto)
    pintarCarrito(nuevoCarrito,listaCarritoUI,totalUI)
    console.log ("estado actual del carrito", nuevoCarrito);
 }
 mostrarProductos(productos,contenedorProds,comprarProducto);
    
 