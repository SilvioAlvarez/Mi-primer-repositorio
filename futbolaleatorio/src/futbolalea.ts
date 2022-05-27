let cantAlumnos:number=Number(prompt("Ingrese la cantidad de alumnos"))
let edades: number[]=new Array(cantAlumnos);
let indice:number;
function crearAleatorio(min: number, max: number): number {
 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let cargarAleatorio=(arreglo:number[], cantidad:number)=>{
  let indice:number;
  for(indice=0;indice<cantidad;indice++){
    arreglo[indice]=crearAleatorio(3,7);
console.log(arreglo[indice])
  }
return arreglo;
}
let mostrarArreglo=(arreglo:number[],cantidad:number)=>{
  let texto:string="";
  for(indice=0;indice<cantidad;indice++){
    texto+=arreglo[indice]+" "
  }
  console.log(texto)
}

let calcularPromedio=(arreglo:number,cantidad:number)=>{
  let suma :number=0;
  let promedio :number;
  for(indice=0;indice<cantidad;indice++){
    suma+=arreglo[indice];
}
promedio=suma/cantidad;
return promedio;
}
cargarAleatorio(edades, cantAlumnos);
mostrarArreglo(edades,cantAlumnos);
console.log(calcularPromedio(edades,cantAlumnos));
console.log(`Tengo ${cantAlumnos} alumnos`);