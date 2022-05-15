let numeroIngresado : number = Number(prompt("Ingrese un numero"));
 
while (numeroIngresado <= 0){
  numeroIngresado = Number(prompt("Ingrese un numero positivo"));

}if (numeroIngresado%2===0){
  console.log("El numero "+numeroIngresado+" es par");

}else{
  console.log("El numero "+numeroIngresado+" es impar");
}