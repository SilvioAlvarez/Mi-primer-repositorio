let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");


btnEnv.addEventListener("click", () => {
let dato = document.getElementById("dato");

let posicion : number = dato.value;

if(posicion == 1){
  console.log("Has llegado en primer lugar");
  console.log("Ha ganado medalla de oro");
}
else if(posicion == 2){
  console.log("Has llegado en segundo lugar");
  console.log("Ha ganado medalla de plata");
}
else if(posicion == 3){
  console.log("Usted llego en tercer lugar");
  console.log("Ha ganado medalla de bronce");
}
else {
  console.log("Usted recibira un diploma");
}
}
rotulo.innerHTML = ("Esta es su posicion")