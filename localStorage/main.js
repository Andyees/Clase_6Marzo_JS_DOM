

notaInput = document.getElementById ("notaInput");
const btnGuardarNota = document.getElementById("btnGuardarNota");
const resultadoNota = document.getElementById("resultadoNota");

const notaGuardada = localStorage.getItem ("mi_nota");
if (notaGuardada) {
    resultadoNota.innerText = "guardado: " + notaGuardada;
}

btnGuardarNota.addEventListener( "click", () => {
    const texto = notaInput.value;
    localStorage.setItem ("mi_nota", texto);
    resultadoNota.innerText = "guardado con exito: "+ texto;
    notaInput.value = ""


});

const btnSumar = document.getElementById("btnSumar")
const btnreset = document.getElementById("btnReset")
const contadorTexto = document.getElementById("contadorTexto")

let cuenta = localStorage.getItem("conteo") || 0;
contadorTexto.innerText = cuenta 

btnSumar.addEventListener ("click" , () => {
 cuenta++; // suma 1 a la variable cuenta
 contadorTexto.innerText = cuenta // actualizar visualamente en la pagina
 localStorage.setItem("conteo",cuenta)

});

btnreset.addEventListener ( "click" ,() => {
    cuenta = 0
    localStorage.removeItem("conteo") // borro lo que estaba en la memmoria
    contadorTexto.innerText = cuenta
});

btnborrar.addEventListener ( "click" ,() => {
localStorage.clear() 
})

 