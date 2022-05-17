let numeroIngresado : number = Number(prompt("Ingrese un numero"));
 let divisor:number;
let div: number=0;
while (numeroIngresado <= 0){
  numeroIngresado = Number(prompt("Ingrese un numero positivo"));
}
for(divisor=0; divisor<=numeroIngresado; divisor++){
if (numeroIngresado%divisor===0){
div++;
console.log("El numero "+divisor+" es divisor de "+numeroIngresado);

}}

    console.log("El numero de divisores de "+numeroIngresado+" es "+div);

