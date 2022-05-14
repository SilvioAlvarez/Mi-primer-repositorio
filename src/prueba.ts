let dimensionArreglo : number = Number(prompt("ingrese cuantos numeros escribira"));
let arregloNumeros: number [] = new Array (dimensionArreglo);
let num: number=0;
let pares: number = 0;
let impares: number = 0;
let neutro:number= 0;
for( num = 0; num<dimensionArreglo; num++){
arregloNumeros[num]= Number(prompt("ingrese los numeros"+num));

if(arregloNumeros[num]===0){
 neutro++;

}
else if(arregloNumeros[num]%2===0 ){
pares++;
}
else {
impares++;
 
}}

console.log("Los numeros pares son "+pares+" los impares son "+impares+" los ceros son "+neutro);  

