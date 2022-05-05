let contador : number = 1;
let claveingresada : string
                
while(contador <= 3 && claveingresada != "eureka") {
  claveingresada = prompt("Introduzca la clave");
  contador ++;
 
} 
if (claveingresada == "eureka") {
  console.log("clave correcta");
      
}
else
{
  prompt("Intente despues de 24 horas");
  console.log("Intente despues de 24 horas");
}
