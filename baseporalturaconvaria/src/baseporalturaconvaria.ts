let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");

let btnEnv = document.getElementById("btnEnviar");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");


btnEnv.addEventListener("click", () => {
let altura : number = Number(dato1.value);
let base : number = Number(dato2.value);
let area : number = 0;
area = base * altura;

console.log("El area del rectangulo es ", + area);
}
rotulo.innerHTML = ("ingrese altura");
rotulo1.innerHTML = ("ingrese base");

