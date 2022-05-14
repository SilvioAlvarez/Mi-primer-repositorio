let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");



/*let bas : number =Number(dato.value);
let altur : number =Number(dato1.value);*/



btnEnv.addEventListener("click", () => {

let calcularAreaTriangulo = (base:number, altura:number):number => {
 

 return (base * altura)/2;
  };

for  (let i:number =1; i<=7; i++)

console.log("El area del triangulo es",calcularAreaTriangulo (i,i*2));
})
rotulo.innerHTML =("Ingrese el valor de base");
rotulo1.innerHTML =("Ingrese el valor de altura");

