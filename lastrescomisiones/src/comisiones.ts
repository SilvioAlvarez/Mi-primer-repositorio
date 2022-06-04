
let dimensionArreglo:number[]=10;
let comisionA:number[]=new Array(10);
let comisionB:number[]=new Array(10);
let comisionC:number[]= new Array(10); 

comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];  
comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];  
comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];

function mayorPromedio(cantidad:number){

   let sumanotasA:number=0;
   let sumanotasB:number=0;
   let sumanotasC:number=0;

let indice:number;
let promedioA:number=0;
let promedioB:number=0;
let promedioC:number=0;

    for(indice=0;indice<dimensionArreglo;indice++){ 
    sumanotasA+=comisionA[indice];
    sumanotasB+=comisionB[indice];
    sumanotasC+=comisionC[indice];
  
  } promedioA=sumanotasA/dimensionArreglo;
   promedioB=sumanotasB/dimensionArreglo;
   promedioC=sumanotasC/dimensionArreglo;
   
    if(promedioA>promedioB&&promedioA>promedioC){
    
    console.log("El promedio mayor es  "+promedioA+ " de la comision A");
    
}else if(promedioC>promedioB){
console.log("El mayor promedio es "+promedioC+ " de la comision C");

}else {
console.log ("El mayor promedio es " +promedioB+ " de la comision B");
}

    if(promedioA<promedioB&&promedioA<promedioC){
console.log("El promedio menor es  "+promedioC+ " de la comision C");
}else if(promedioC<promedioB){
console.log("El menor promedio es "+promedioA+ " de la comision A");
}else {
console.log ("El menor promedio es " +promedioB+ " de la comision B");
}}
function estanDesaprobados(cantidad:number[]){
let indice:number;
let desaprobadosA:number=0;
let desaprobadosB:number=0;
let desaprobadosC:number=0;

  for(indice=0;indice<dimensionArreglo;indice++){ 
    if(comisionA[indice]<6){
    desaprobadosA++;
    }if(comisionB[indice]<6){
    desaprobadosB++;
    }if(comisionC[indice]<6){
    desaprobadosC++;
}}console.log("Desaprobados en la comisionA "+desaprobadosA+ " desaprobados en la comisionB " +desaprobadosB+ " desaprobados en la comisionC "+desaprobadosC);
}
function menorNota(cantidad:number[]){
let minimanotaA:number=11;
let minimanotaB:number=11;
let minimanotaC:number=11;

    for(let indice:number=0;indice<dimensionArreglo;indice++){
      if (comisionA[indice]<minimanotaA){
        minimanotaA=comisionA[indice];
      
      }if (comisionB[indice]<minimanotaB){
        minimanotaB=comisionB[indice];
      }if (comisionC[indice]<minimanotaC){
        minimanotaC=comisionC[indice];
      }}
      console.log("La minima nota de la comisionA es " +minimanotaA+ " la de la comisionB es "+minimanotaB+ " y la de lacomsionC "+minimanotaC);
}
mayorPromedio();
menorNota();
estanDesaprobados();
let dimensionArreglo:number[]=10;
let comisionA:number[]=new Array(10);
let comisionB:number[]=new Array(10);
let comisionC:number[]= new Array(10); 

comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];  
comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];  
comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];

function mayorPromedio(cantidad:number){

   let sumanotasA:number=0;
   let sumanotasB:number=0;
   let sumanotasC:number=0;

let indice:number;
let promedioA:number=0;
let promedioB:number=0;
let promedioC:number=0;

    for(indice=0;indice<dimensionArreglo;indice++){ 
    sumanotasA+=comisionA[indice];
    sumanotasB+=comisionB[indice];
    sumanotasC+=comisionC[indice];
  
  } promedioA=sumanotasA/dimensionArreglo;
   promedioB=sumanotasB/dimensionArreglo;
   promedioC=sumanotasC/dimensionArreglo;
   
    if(promedioA>promedioB&&promedioA>promedioC){
    
    console.log("El promedio mayor es  "+promedioA+ " de la comision A");
    
}else if(promedioC>promedioB){
console.log("El mayor promedio es "+promedioC+ " de la comision C");

}else {
console.log ("El mayor promedio es " +promedioB+ " de la comision B");
}

    if(promedioA<promedioB&&promedioA<promedioC){
console.log("El promedio menor es  "+promedioC+ " de la comision C");
}else if(promedioC<promedioB){
console.log("El menor promedio es "+promedioA+ " de la comision A");
}else {
console.log ("El menor promedio es " +promedioB+ " de la comision B");
}}
function estanDesaprobados(cantidad:number[]){
let indice:number;
let desaprobadosA:number=0;
let desaprobadosB:number=0;
let desaprobadosC:number=0;

  for(indice=0;indice<dimensionArreglo;indice++){ 
    if(comisionA[indice]<6){
    desaprobadosA++;
    }if(comisionB[indice]<6){
    desaprobadosB++;
    }if(comisionC[indice]<6){
    desaprobadosC++;
}}console.log("Desaprobados en la comisionA "+desaprobadosA+ " desaprobados en la comisionB " +desaprobadosB+ " desaprobados en la comisionC "+desaprobadosC);
}
function menorNota(cantidad:number[]){
let minimanotaA:number=11;
let minimanotaB:number=11;
let minimanotaC:number=11;

    for(let indice:number=0;indice<dimensionArreglo;indice++){
      if (comisionA[indice]<minimanotaA){
        minimanotaA=comisionA[indice];
      
      }if (comisionB[indice]<minimanotaB){
        minimanotaB=comisionB[indice];
      }if (comisionC[indice]<minimanotaC){
        minimanotaC=comisionC[indice];
      }}
      console.log("La minima nota de la comisionA es " +minimanotaA+ " la de la comisionB es "+minimanotaB+ " y la de lacomsionC "+minimanotaC);
}
mayorPromedio();
menorNota();
estanDesaprobados();