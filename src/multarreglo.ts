function contarButacasDesocupadas(butacas:number[],ocupadas:number[],desocupadas:number[],largo:number):number{

let indice: number;
let desocupada: number=0;
for (indice=0; indice<largo; indice++){

if(butacas[indice]===0){
  desocupada=indice;
}
}
return desocupada;
}
let cantidad:number=50;

let indice:number;

let butacasDesocupadas:number[];
for (indice=0;indice<cantidad;indice++){
butacasDesocupadas[indice]++;
}

 
console.log(contarButacasDesocupadas());
