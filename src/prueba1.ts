let dimension :number=Number(promp("Ingrese la dimension del arreglo"));
let num1 :number[]=Number(promp("Ingrese el minimo del arreglo"));
let num2 :number[]=Number(promp("Ingrese el maximo del arreglo"));
let primerArreglo:number[]=new Array(dimension);
let segundoArreglo:number[]=new Array(dimension);
let tercerArreglo:number[]=new Array(dimension);
let indice:number;
let cargarArreglo=(arreglo:number[],min:number[];max:number[],cantidad:number):number[]=>{
  for(indice=0;indice<cantidad;indice++){
    arreglo[]=crearAleatorio(min,max);
  
  }
    return arreglo;
}
let sumarArreglo