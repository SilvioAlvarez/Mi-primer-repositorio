let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let dato = document.getElementById("dato");
let dato1 = document.getElementById("dato1");


btnEnv.addEventListener("click", () => {
let num : number = Number(dato.value);
let num1: number = Number(dato1.value);
let sume: number; 
 

num2 = num;
sume = 0;

for (let num2 :number =num;  num2<=num1; num2++){
sume=sume+num2;

}
console.log("La suma de los intermedios es: ", sume)

})
rotulo.innerHTML =("Ingrese el primer numero");
rotulo1.innerHTML =("Ingrese un numero mayor");
