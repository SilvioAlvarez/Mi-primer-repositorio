let contador : number = 1;
let claveingresada : string

while(contador <= 3 && claveingresada != "eureka") {
  claveingresada = prompt("Introduzca la clave");
  contador ++;
  console.log("clave incorrecta");
}
if (claveingresada == "eureka") {
  console.log("clave correcta");

  
} 
rotulo.innerHTML = ("Ingrese la clave");