let rotulo = document.getElementById("rotulo");
let btnEnv = document.getElementById("btnEnviar")
let dato = document.forms[0].dato;


btnEnv.addEventListener("click", () => {
let altura : number = Number(dato.value);
let alturamin : number = 3.50;

if(altura <= alturamin){

console.log("Usted no supera la altura minima");
}
else {
  console.log("Acceso permitido");
}

})
rotulo.innerHTML = "Ingrese altura";