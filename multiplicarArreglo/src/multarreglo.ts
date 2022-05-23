function multiplicarArreglo( arreglo:number[]){

let indice:number;
let arreglo1:number[]=new Array(3);
let arreglo2:number[]=new Array(3);
let arregloResultado:number[]= new Array(3);

for (indice=0;indice<3;indice++){
  arreglo1[indice]=Number(prompt("Ingrese valores arreglo1 "+indice));
}
for (indice=0;indice<3;indice++){
 arreglo2[indice]=Number(prompt("Ingrese valores arreglo2 "+indice));
}
for (indice=0;indice<3;indice++){
arregloResultado[indice]=arreglo1[indice]*arreglo2[indice];
}
return arregloResultado;
}
console.log(multiplicarArreglo());
console.log(multiplicarArreglo());
console.log(multiplicarArreglo());

