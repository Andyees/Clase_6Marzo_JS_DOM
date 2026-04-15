// 1. cargar la pagina y la lista si esta creada leerla si no crearla
let favoritos = JSON.parse(localStorage.getItem("mis_deseos"))  || []
// pintando los favoritos que ya estaban guardados
favoritos.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.classList.add("active");

});
// seleccionando los botones
const botones = document.querySelectorAll(".BtnFavorito")
// entendiendo o escuchando el cilck en cada uno de los botones
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const tarjeta = boton.parentElement; // subir al div con la clase tarjeta
        const idActual = tarjeta.id; // sacara el id (p1,p2,p3)

        if (favoritos.includes (idActual)) {

            favoritos = favoritos.filter (item => item !== idActual);
            tarjeta.classList.remove("active"); // lo que es favorito se quita

        }
        else {
            favoritos.push(idActual)
            tarjeta.classList.add("active"); // lo que no es favorito se mete
        }

        localStorage.setItem("mis_deseos", JSON.stringify(favoritos)) // aqui se guarda el arreglo en el almacenamiento local
    })

});



