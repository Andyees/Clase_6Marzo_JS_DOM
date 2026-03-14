//Sincronico
console.log("1");
console.log("2");
console.log("3");

//Asincronico

console.log("Probando CallBacks");

console.log("paso 1 : Pidiendo Hamburguesa...");

setTimeout(() => {
  setTimeout();
  console.log(
    "Paso 2: CALLBACK HECHO  !La hamburguesa llego despues de 2 segundos",
  );
}, 10000);

console.log("Paso 3: Yo sigo esperando la hambureguesa..");

/// Promesas
let imagen = document.getElementById("imagen");
let texto = document.getElementById("chiste");
let button = document.getElementById("Busqueda");

button.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      imagen.setAttribute("src", data.icon_url);
      imagen.style.width = "200px";
      imagen.style.height = "200px";
      texto.textContent = data.value;
    })
    .catch((error) => console.error("ERROR consumiendo api", error));
});

console.log("Haciendo Promesas");
const PedirHamburguesa = () => {
  return new Promise((resolve, reject) => {
    const hayIngredientes = false;

    console.log("Cocinando Hamburguesa..");
    setTimeout(() => {
      if (hayIngredientes) {
        resolve("Hamburguesa Lista y calientica");
      } else {
        reject("La hamburguesa no se puede hacer No habia carne");
      }
    }, 3000);
  });
};

PedirHamburguesa()
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log("Proceso terminado"));

fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("error" + err));

const res = await fetch("https://api.chucknorris.io/jokes/random");
const data = await res.json();
console.log(data);
