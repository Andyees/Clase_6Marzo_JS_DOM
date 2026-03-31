import { areaRectangulo } from "./ecuaciones.js";

import AreaEsferaPlana from "./ecuaciones.js"

const circulo= AreaEsferaPlana(2)
const rectangulo = areaRectangulo (2,2)

document.getElementById("res-circulo").textContent = circulo
document.getElementById("res-rectangulo").textContent = rectangulo