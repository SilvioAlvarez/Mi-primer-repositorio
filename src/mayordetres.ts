function sumarVector(v1 : number[], v2 : number[], vSuma : number[], cantidad : number) { 
let indice : number;
for (indice=0; indice<cantidad; indice++) { 
vSuma[indice] = v1[indice] + v2[indice];
}
}



let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vSuma : number[] = new Array(6);
let indice: number;

for (indice = 0;indice<6;indice++){
v1[indice]=Number(prompt("Ingrese el valor v1["+indice+"]"));
  
}
for (indice = 0;indice<6;indice++){
v2[indice]=Number(prompt("Ingrese el valor v2["+indice+"]"));
  
  }
  for (indice = 0;indice<6;indice++){
  
  vSuma[indice]=v1[indice]+v2[indice];
  }
console.log(v1);
sumarVector(v1, 6);
console.log(v2);
sumarVector(v2, 6);
sumarVector(v1, v2, vSuma, 6);
console.log(v1);
sumarVector(v1, 6) ;
 console.log(v2);
sumarVector(v2, 6) ;
console.log(vSuma);
sumarVector(vSuma, 6) ;