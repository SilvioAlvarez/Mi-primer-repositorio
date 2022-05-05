let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");


btnEnv.addEventListener("click", () => {

let sueldo : number = Number(dato.value);
let aumento : number = 0;

let conaument : number = 0;

if(sueldo <= 15000) {

aumento = sueldo * 0.2;
conaument = sueldo + aumento;
    console.log("Usted tiene un aumento del 20%");
    console.log("El monto a pagar es", + conaument);
  }
  else if (sueldo > 15000 && sueldo <= 20000){
    aumento = sueldo * 0.10;
conaument =  sueldo + aumento;


    console.log("Usted tiene un aumento del 10%");    
    console.log("Su sueldo con aumento es", + conaument);
  }
  else if (sueldo > 20000 && sueldo <= 25000){
    aumento = sueldo * 0.05;
conaument = sueldo + aumento;

    console.log("Usted tiene un aumento del 5%");    
  console.log("Su sueldo con aumento es", + conaument);
  
  }
  else {
    
    console.log("Su sueldo no tiene aumento");
  }
})
rotulo.innerHTML = "Sueldo empleado"