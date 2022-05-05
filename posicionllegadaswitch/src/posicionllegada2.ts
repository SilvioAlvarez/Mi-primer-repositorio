let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");

btnEnv.addEventListener("click", () => {

let posicionllegada : number = Number(dato.value);
switch (posicionllegada) {
case 1:

  console.log("Has llegado en primer lugar");
  console.log("Ha ganado medalla de oro");

break;
case 2:

  console.log("Has llegado en segundo lugar");
  console.log("Ha ganado medalla de plata");

break;
case 3:

  console.log("Usted llego en tercer lugar");
  console.log("Ha ganado medalla de bronce");

break;

default:
  console.log("Usted recibira un diploma");
  
}
})
rotulo.innerHTML = ("Esta es su posicion")