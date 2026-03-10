/// Formulario

const form = document.querySelector("#registro-form");
const resultadoForm = document.querySelector("#Resultado_registro");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const datos = new FormData(form);

  const nombre = datos.get("usuario");
  const email = datos.get("correo");
  const pais = datos.get("pais");

  console.log(nombre + email + pais);

  resultadoForm.innerHTML = ` <div style="   background: rgb(192, 221, 243);color: rgb(21, 12, 12);padding: 10px;
            border-radius: 5px;
            margin-top: 10px;">
    
         <strong> Registro Exitoso</strong> <br>

         Nombre: ${nombre}<br>
         Email: ${email}<br>
         Pais: ${pais} <br>
         </div>  `;
});

/// Lista de tareas

const inputTarea = document.querySelector("#tarea-input");
const btnAgregar = document.querySelector("#btn-agregar");
const lista = document.querySelector("#Lista-tareas");

btnAgregar.addEventListener("click", () => {
  if (inputTarea.value.trim() === "") return;

  const nuevaTarea = document.createElement("li");
  nuevaTarea.innerHTML = `<span> ${inputTarea.value}  </span>
   <button class="btn-eliminar">X </button>`;
  lista.appendChild(nuevaTarea);
  inputTarea.value = "";
  //Logica btn borrar
  nuevaTarea.querySelector(".btn-eliminar").addEventListener("click", () => {
    nuevaTarea.remove();
  });
});

// Boton Modo Oscuro

const btDark = document.querySelector("#btn-dark");

btDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    btDark.textContent = "Alternar Modo Claro";
  } else {
    btDark.textContent = "alternar Modo Oscuro";
  }
});
