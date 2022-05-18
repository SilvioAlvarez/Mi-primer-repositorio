let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

 let btnEnv = document.getElementById("btnEnviar");
 let dato1 = document.getElementById("dato1");
 let dato2 = document.getElementById("dato2");
 let dato3 = document.getElementById("dato3");

 btnEnv.addEventListener("click", () => {

let mayor1 : number = Number(dato1.value);
let mayor2 : number = Number(dato2.value);
let mayor3 : number = Number(dato3.value);
if(mayor1 > mayor2 && mayor1 > mayor3) {
  console.log("El numero " + mayor1 + " es el mayor");
} else if(mayor2 > mayor1 && mayor2 > mayor3) {

  console.log("El numero " + mayor2 +" es el mayor");
} else if(mayor3 > mayor1 && mayor3 > mayor2) {

  console.log("El numero " + mayor3 + " es el mayor");
  }
  else if(mayor1 === mayor2 && mayor2 === mayor3) {
    console.log("todos los numeros son iguales");
  
  }
  else if(mayor1 === mayor2 && mayor1 > mayor3){
  console.log("Se repite dos veces el mayor que es: ", + mayor1);

}
  else if(mayor1 < mayor2 && mayor2 === mayor3){
  console.log("Se repite dos veces el mayor que es: ", + mayor2);
  }
 })
 rotulo.innerHTML = ("Ingrese el primer numero");
 rotulo1.innerHTML = ("Ingrese el segundo numero");
 rotulo2.innerHTML = ("Ingrese el tercer numero");
