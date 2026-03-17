// Seleccionando Elementos

const grid = document.getElementById("moviegrid");
const searchInput = document.getElementById("movieSearch");
let url = "https://api.tvmaze.com/search/shows?q=";

const res2 = await fetch(`https://api.tvmaze.com/search/shows?q=harry`);
const data2 = await res2.json();

const BusquedaMovie = async (palabra) => {
  if (palabra.length < 3) return;

  grid.innerHTML = "<p>Buscando...</p>";

  try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${palabra}`);
    const data = await res.json();

    renderizarMovies(data);
  } catch (error) {
    grid.innerHTML = "<p>Error en la conexion...</p>";
  }
};

const renderizarMovies = (movies) => {
  grid.innerHTML = "";

  movies.forEach((movie) => {
    const show = movie.show;
    const card = document.createElement("div");
    card.classList.add("card");
    const imgUrl = show.image.original;

    card.innerHTML = ` <img src="${imgUrl}" alt="${show.name}" />
        <div class="info">
          <h3>${show.name}</h3>
          <p>Genero: ${show.genres.join(",") || "N/A"}</p>
          </div>

          `;
    grid.appendChild(card);
  });
};

let timer;

searchInput.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    BusquedaMovie(searchInput.value);
  }, 500);
});
