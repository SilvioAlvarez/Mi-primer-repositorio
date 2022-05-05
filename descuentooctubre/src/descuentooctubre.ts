

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let btnEnv = document.getElementById("btnEnviar");






btnEnv.addEventListener("click", () => {

let monto : number = Number(dato1.value);
let cantidad : number = Number(dato2.value);
let mes : number = dato3.value;
let descuento : number = 0;
let montocondescuento : number = 0;
let preciototal : number = monto * cantidad;

if (mes == "Octubre") {
  descuento = (preciototal*15) /100;
  montocondescuento = preciototal - descuento;
  console.log("Por comprar en el mes de octubre tiene un 15% de descuento");
  console.log("El monto a pagar es ", + montocondescuento);
}
else {
  console.log("Usted no tiene descuento, el monto a pagar es:", + preciototal);
}
})
rotulo1.innerHTML = ("Ingrese monto");
rotulo2.innerHTML = ("Ingrese cantidad");
rotulo3.innerHTML = ("Ingrese mes");