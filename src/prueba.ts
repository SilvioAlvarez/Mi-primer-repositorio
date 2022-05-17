/*let numeroIngresado : number = Number(prompt("Ingrese un numero"));
 
while (numeroIngresado <= 0){
  numeroIngresado = Number(prompt("Ingrese un numero positivo"));

}if (numeroIngresado%2===0){
  console.log("El numero "+numeroIngresado+" es par");*/


//let numeroIngresado : number = Number(prompt("Ingrese un numero"));
 let divisor:number;
let div: number=0;
while (numeroIngresado <= 0){
  numeroIngresado = Number(prompt("Ingrese un numero positivo"));
}
for(divisor=0; divisor<=numeroIngresado; divisor++){
if (numeroIngresado%divisor===0){
div++;
console.log("En numero "+divisor+" es divisor de "+numeroIngresado);

}}

    console.log("El numero de divisores es ",div);



/*let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vsuma : number[] = new Array(6);
let indice: number;

for (indice = 0;indice<6;indice++){
v1[indice]=Number(prompt("Ingrese el valor v1["+indice+"]"));
  
}
for (indice = 0;indice<6;indice++){
v2[indice]=Number(prompt("Ingrese el valor v1["+indice+"]"));
  
  }
  for (indice = 0;indice<6;indice++){
  
  vsuma[indice]=v1[indice]+v2[indice];
  
  console.log("La suma es",vsuma[indice]);
  }*/