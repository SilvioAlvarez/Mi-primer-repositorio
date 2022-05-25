//este esta mal redactada la función

/*function multiplicarArreglo( arreglo:number[]){

let indice:number;
let arreglo1:number[]=new Array(3);
let arreglo2:number[]=new Array(3);
let arregloResultado:number[]= new Array(3);

for (indice=0;indice<3;indice++){
  arreglo1[indice]=Number(prompt("Ingrese valores arreglo1 "+indice));
}
for (indice=0;indice<3;indice++){
 arreglo2[indice]=Number(prompt("Ingrese valores arreglo2 "+indice));
}
for (indice=0;indice<3;indice++){
arregloResultado[indice]=arreglo1[indice]*arreglo2[indice];
}
return arregloResultado;
}
console.log(multiplicarArreglo());
console.log(multiplicarArreglo());
console.log(multiplicarArreglo());*/

//este está bien con ayuda del profesor Daniel
function multiplicarArreglo(arreglo1:number[],arreglo2:number[],arreglo3:number[],arreglo4:number[],largo:number):number[]{
	let indice:number;
	let arregloResultado:number[]= new Array(largo);
	for (indice=0;indice<largo;indice++){
		arregloResultado[indice]=arreglo1[indice]*arreglo2[indice];
		arregloResultado[indice]=arregloResultado[indice]*arreglo3[indice];
		arregloResultado[indice]=arregloResultado[indice]*arreglo4[indice];


	}
	return arregloResultado;
}
// acá cargamos los arreglos
let indice:number;
let longitud=Number(prompt("Ingrese cuantos numeros quiere multiplicar")); // se puede pedir al usuario la longitud
let arreglo1:number[]=new Array(longitud);
let arreglo2:number[]=new Array(longitud);
let arreglo3:number[]=new Array(longitud);
let arreglo4:number[]=new Array(longitud);

for (indice=0;indice<longitud;indice++){
  arreglo1[indice]=Number(prompt("Ingrese valores arreglo1 "+indice));
}
for (indice=0;indice<longitud;indice++){
 arreglo2[indice]=Number(prompt("Ingrese valores arreglo2 "+indice));

}
for (indice=0;indice<longitud;indice++){
 arreglo3[indice]=Number(prompt("Ingrese valores arreglo3 "+indice));

 }
for (indice=0;indice<longitud;indice++){
 arreglo4[indice]=Number(prompt("Ingrese valores arreglo4 "+indice));
}
console.log(multiplicarArreglo(arreglo1,arreglo2,longitud));

