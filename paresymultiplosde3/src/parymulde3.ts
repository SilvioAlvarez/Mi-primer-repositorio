let resultado : string = "";
let impares : string = "";


for (let num :number = 0; num <=100; num++)
if (num% 2===0){
  resultado = resultado+" "+num ;
}
  console.log("Los numeros pares son: ", resultado);

for (let imp : number = 1; imp <= 100; imp++)
 if(imp% 3===0){
  impares = impares+" "+imp ;
}
 console.log("Los multiplos de 3 son: ", impares);