let dimensionArreglo: number = Number(prompt("Ingrese la cantidad de nombres"));
let arregloNombres: string[] = new Array(dimensionArreglo);
let indice :number;

for(indice=0; indice<dimensionArreglo; indice++){
  arregloNombres[indice] =prompt("Ingrese nombre para la posicion "+indice);
  console.log("El nombe en la posicion " + indice+ " es "+arregloNombres[indice]);
}



//ingresar numeros y nombres y su posicion


/*let arregloNumeros: number[]= new Array(3);
let arregloNombres: string[] = new Array(3);
let indice:number;

for(indice=0; indice<3; indice++){
  arregloNumeros[indice]= Number(prompt("Ingrese un numero para la posicion "));

}
for(indice=0; indice< 3; indice++){
arregloNombres[indice]=prompt("Ingrese nombre para la posicion "+indice);
}
for(indice=0; indice<3; indice++){
  console.log("El numero en la posicion "+ indice+" es "+ arregloNumeros[indice]);
}
  for(indice=0; indice<3; indice++){
  console.log("El numero en la posicion "+ indice+ " es "+ arregloNombres[indice]);
}*/




//Sumar elementos del arreglo


/*let dimensionArreglo: number = Number(prompt("Ingrese longitud del arreglo"));
let arregloDeNumeros: number[]= new Array(dimensionArreglo);
let indice: number;
let sumaTotal: number=0;

for(indice=0; indice< dimensionArreglo; indice++){
  arregloDeNumeros[indice]= Number(prompt("Iingrese numero para la posicion "+ indice));
sumaTotal += arregloDeNumeros[indice];

}
console.log("La suma de todos los elementos del arreglo es  " + sumaTotal);*/