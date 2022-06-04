let dimensionArreglo:number=Number(prompt("Ingrese cantidad de notas: "));
let cantidadNotas:number[]=new Array (dimensionArreglo);
let cantidadMeses:string[]=new Array(dimensionArreglo);
let indice:number;
let desaprobadas:number[]=0;
let notasdesap:string[]=" ";

  function notaAlumno(nota:number[],cantidad:number){
    for (indice = 0;indice<dimensionArreglo;indice++){
    cantidadNotas[indice]=Number(prompt("Ingrese el valor v1["+indice+"]"));
}
    for(indice=0; indice<dimensionArreglo; indice++){
    cantidadMeses[indice] =prompt("Ingrese el mes para la nota "+indice);

    console.log("Para el mes de " + cantidadMeses[indice]+ " la nota es: "+cantidadNotas[indice]);
}   for(indice=0; indice<dimensionArreglo; indice++){

      if(cantidadNotas[indice]<6){
 
        desaprobadas++;
        notasdesap+=cantidadMeses[indice]+",";
 }}}

let maximanota:number[]=0;
let minimanota:number[]=dimensionArreglo;
let maximes:string=" ";
let minimes:string=" ";
  function maximarNota(notas:number[],minimo:number[],cantidad:number){
 
    for(indice=0;indice<dimensionArreglo;indice++){
 
      if(cantidadNotas[indice]>maximanota){
        maximanota=cantidadNotas[indice];
        maximes=cantidadMeses[indice]+",";
  
   }   if (cantidadNotas[indice]<minimanota){
         minimanota=cantidadNotas[indice];
        minimes=cantidadMeses[indice]+","
  }}} 
  
  let sumatotal:number[]=0;
      let promedio:number[]=0;
  function calcularPromedio(cantidad:number){
    
    for(indice=0;indice<dimensionArreglo;indice++){
        sumatotal+=cantidadNotas[indice];
    }
        promedio=sumatotal/dimensionArreglo;
    }
notaAlumno();
maximarNota();
calcularPromedio();
console.log("La maxima nota fue en  "+maximes+"  nota "+maximanota);
console.log("La minima nota es "+minimanota+" en el mes de "+minimes);
  
console.log("Desaprobadas " + desaprobadas+ " in los meses de : "+notasdesap);
console.log("El promedio es "+promedio);