function mejorAula(nombresAulas:string[],lugaresAulas:number[],largo:number, cantidadNiños:number[]):number{

let indice :number;
let asientosAula:number=0;
for (indice=0;indice<largo;indice++){
  if((lugaresAulas[indice]>=cantidadNiños) && (lugaresAulas[indice]<lugaresAulas[asientosAula])){
asientosAula=indice;
  }
}
return nombresAulas[asientosAula];
}
let cantidadAulas:number=3;
let coloresAulas:string[]=new Array(cantidadAulas);
let capacidadAulas:number[]=new Array(cantidadAulas);
let cantidadAlumnos:number=Number(prompt("Ingrese la cantidad de alumnos"));
coloresAulas[0]= "Azul"; 
coloresAulas[1]= "Verde";
coloresAulas[2]= "Amarilla";
capacidadAulas[0]= 40;
capacidadAulas[1]= 35;
capacidadAulas[2]= 30;

console.log("La mejor Aula es "+mejorAula(coloresAulas,capacidadAulas, cantidadAulas, cantidadAlumnos));

