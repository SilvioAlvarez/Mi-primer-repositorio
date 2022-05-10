
let rotulo = document.getElementById("rotulo");
let dato = document.forms[0].dato;

btnEnviar.addEventListener("click", () => {
let num : number = Number(dato.value);

if (num === 0){
  console.log("el " + num + " no es par ni impar");
}
else if (num % 2 === 0){
  console.log("El " + num + " es par");
}
else {
  console.log("El " + num + " es impar");
}
})
rotulo.innerHTML=("Ingrese el numero");