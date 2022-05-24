function multiplicarArreglo(arreglo1:number[],arreglo2:number[],largo:number):number[]{
	let indice:number;
	let arregloResultado:number[]= new Array(largo);
	for (indice=0;indice<largo;indice++){
		arregloResultado[indice]=arreglo1[indice]*arreglo2[indice];
	}
	return arregloResultado;
}
// acá cargamos los arreglos
let indice:number;
let longitud=Number(prompt("Ingrese cuantos numeros quiere multiplicar")); // se puede pedir al usuario la longitud
let arreglo1:number[]=new Array(longitud);
let arreglo2:number[]=new Array(longitud);
for (indice=0;indice<longitud;indice++){
  arreglo1[indice]=Number(prompt("Ingrese valores arreglo1 "+indice));
}
for (indice=0;indice<longitud;indice++){
 arreglo2[indice]=Number(prompt("Ingrese valores arreglo2 "+indice));

}
console.log(multiplicarArreglo(arreglo1,arreglo2,longitud));





