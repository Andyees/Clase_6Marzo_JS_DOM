let texto = "Javascript";
texto = texto.replace("Java", "Script");

console.log(texto.replace("Java", "Script"));

const persona = {
  nombre: "Andres",
  Cargo: "Profe",
};

let arreglo = [];
arreglo[0] = 1;
arreglo[1] = 2;

arreglo.push(3);
arreglo.push(persona);
arreglo.push("hola");
arreglo.push(true);

console.log(arreglo);
let frase = "hola como estas" + "muy bien y tu";
console.log(frase);
let nombres = ["Ana", "Carlos", "María"];
nombres.forEach((nombre) => {
  console.log("Hola Como estas " + nombre);
});

nombresApellido = nombres.map((elemento) => elemento + " Rodriguez");
0;

const numero = 93;
for (let i = 1; i < 11; i++) {
  if (i == 3) {
    continue;
  }
  console.log(numero + "x" + i + "=" + numero * i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j = j + 1;
  if (j == 3) {
    break;
  }
}
j = 0;

console.log("empieza ciclo do while");
do {
  console.log(j);
  j = j + 1;
} while (j < 5);

for (let index = 0; index <= 100; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

console.log("FUNCIONESS");

///////////// Funciones

function suma(a, b, c) {
  return a + b + c;
}

let resta = function (a, b) {
  return a - b;
};

function comprobarpar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(comprobarpar(8));

sumados = suma(1, 3, 4);
console.log(resta(2, 2));

const hora = new Date().getHours;

let saludar = function (hour) {
  if (hour >= 6 && hour < 12) {
    return "Buenos Dias";
  } else if (hour >= 12 && hour < 19) {
    return "Buenas Tardes";
  } else {
    return "Buenas Noches";
  }
};