
let resultado : string = "";
let resul : string = "";

let resultad : number = 0;
let result : number = 0;

for (let pares : number = 0; pares <= 100; pares++)
switch (pares) {
  case pares%2 ===0:
  resultad = pares + pares;
  resultado = resultad+" "+pares;
    console.log("resultado ",resultado)
    break;
case pares%3 ===0:
result = pares * pares;
resul = result+" "+result;
console.log("resultado ", resul)

    break;
}






