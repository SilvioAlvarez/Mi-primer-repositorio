let cine:boolean[]= [false,false,true,true,false,false,true,false];
let vacias:number=0;


let butacasVacias = (arreglo:boolean[]):number => {
let indice:number;

  for(indice=0;indice<arreglo.length;indice++){
    if(arreglo[indice]===false){
      vacias++;
    }  
  }
  return vacias;
}
console.log("La cantidad de butacas vacias es "+ butacasVacias(cine));