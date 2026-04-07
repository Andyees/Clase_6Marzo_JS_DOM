export let carrito = []

export function AgregarAlCarrito(producto) {
    carrito.push(producto);
    return [... carrito]
} //   insertamos un producto al final de nuestra lista de compras

export function obtenerTotal() {
    return  carrito.reduce((acumulado,p) => {
     return acumulado + p.precio;
    } ,0); // Sumar todos los precios de los productos p
}
 export function limpiarCarrito() {
    carrito = []
    return carrito
 } // vaciar la variable carrito