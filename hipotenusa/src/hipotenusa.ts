let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let dato = document.getElementById("dato");
let dato1 = document.getElementById("dato1");

btnEnv.addEventListener("click", () => {


let base : number = Number(dato.value);
let altura : number = Number(dato1.value);
let hipotenusa : number = 0; 
let resultado : number = 0;


hipotenusa = (base ** 2) + altura ** 2;

resultado = hipotenusa**0.5;
console.log(" es ", resultado);
});
rotulo.innerHTML = ("base");
rotulo1.innerHTML = ("altura");