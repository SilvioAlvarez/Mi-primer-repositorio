let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let dato = document.getElementById("dato");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");





btnEnv.addEventListener("click", () => {

let calcularResultado = (numero1:number, numero2:number,opcion:number):number => {
 let resultado:number = 0;
 if (opcion === 1){
resultado =numero1 + numero2;
 }
 else if(opcion ===2){
   resultado =numero1 - numero2;
 }else {
   console.log("Escriba opcion 1 o 2");
 }
 return resultado;
  }


let total : number = calcularResultado(Number(dato.value), Number(dato1.value), Number(dato2.value));

console.log(total);
})
rotulo.innerHTML =("Ingrese el primer numero");
rotulo1.innerHTML =("Ingrese el segundo numero");
rotulo2.innerHTML =("Ingrese 1 para suma o 2 para resta");
