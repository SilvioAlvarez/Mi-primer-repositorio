/*function contarButacas(butacas:boolean[],cantidad:number):number{
let indice :number;
let desocupadas:number=0;

   for(indice=0;indice<cantidad;indice++){
     if(butacas[indice]===0){
       desocupadas++;
     }
   }
  return desocupadas;
}*/
let butacasEnSala:number=Number(prompt("Ingrese la cantidad de butacas"));
let numeroDeButacas:string[]=new Array(butacasEnSala);
let desocupadas:number=0;


let i:number;
for(i=0;i<butacasEnSala;i++){
numeroDeButacas[i]=prompt("ingrese 1 si esta ocupada o 0 si esta desocupada, butaca N° ["+i+"]");
  if (numeroDeButacas[i]==="0"){
    desocupadas++;
  }
}

console.log(desocupadas);