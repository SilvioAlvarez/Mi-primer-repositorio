let dimension :number=Number(prompt("Ingrese la dimension del arreglo"));
let num1 :number[]=Number(prompt("Ingrese el minimo del arreglo"));
let num2 :number[]=Number(prompt("Ingrese el maximo del arreglo"));
let arreglo1:number[]=new Array(dimension);
let arreglo2:number[]=new Array(dimension);
let arreglo3:number[]=new Array(dimension);
let indice:number;
function crearAleatorio(min: number, max: number): number {
 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let cargarArreglo=(arreglo:number[],min:number[],max:number[],cantidad:number):number=>{
  for(indice=0;indice<cantidad;indice++){
    arreglo[indice]=crearAleatorio(min,max);
  
  }
    return arreglo;
}

let sumarArreglo = (arreglo1:number[],arreglo2:number[],arreglo3:number[],cantidad:number):number[]=>{

  for(indice=0;indice<cantidad;indice++){
    arreglo3[indice]=arreglo1[indice]+arreglo2[indice];

  }
return arreglo3;
}
let mostrarArreglo=(arreglo:number[],cantidad:number):number[]=>{
  let texto:string="";
  for(indice=0;indice<cantidad;indice++){
    texto+=arreglo[indice];
  }
  return texto;
}

console.log("Los numeros del arreglo1 son: "+cargarArreglo(arreglo1,dimension,num1,num2));
console.log("Los numeros del arreglo2 son: "+cargarArreglo(arreglo2,dimension,num1,num2));
console.log("Los numeros de la suma son: "+sumarArreglo(arreglo1,arreglo2,arreglo3,dimension));
console.log("Muestra los numeros de la suma: "+mostrarArreglo(arreglo3,dimension));
