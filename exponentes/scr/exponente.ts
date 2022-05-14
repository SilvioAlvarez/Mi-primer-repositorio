let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let dato = document.getElementById("dato");
let dato1 = document.getElementById("dato1");



btnEnv.addEventListener("click", () => {
let numero : number =Number(dato.value);
let exponente : number =Number(dato1.value);

let calcularAreaTriangulo = (num:number, exp:number):number => {
 let resultado:number=0;

if(exp ===0){
  resultado=1;
}
else{
  resultado= num ** exp;
}
return resultado;
  };

console.log("El resultado es", calcularAreaTriangulo(numero,exponente));

})

rotulo.innerHTML =("Ingrese el numero");
rotulo1.innerHTML =("Ingrese el exponente");

