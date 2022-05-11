let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let dato = document.getElementById("dato");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");


btnEnv.addEventListener("click", () => {
let num1 : number = Number(dato.value);
let num2: number = Number(dato1.value);
let sumaoresta : number = Number(dato2.value);
let resultado : number = 0;


if (sumaoresta ===1){
resultado= num1 + num2;
console.log("El resultado de la suma es: ", resultado);

}else if (sumaoresta === 2){
  resultado = num1 - num2;
console.log("El resultado de la resta es: ", resultado);
}
else {
  console.log("Ingrese 1 para sumar o 2 para restar");
}
})
rotulo.innerHTML =("Ingrese el primer numero");
rotulo1.innerHTML =("Ingrese el segundo numero");
rotulo2.innerHTML =("Ingrese 1 para suma o 2 para resta");

