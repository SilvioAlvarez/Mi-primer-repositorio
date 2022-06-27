let cantidadDeProductos:number=Number(prompt("Ingrese la cantidad de productos"));
let productos:string[]= new Array (cantidadDeProductos);
let precioUnitario:number[]=new Array(cantidadDeProductos);
let precioUnitario:number[]=new Array(cantidadDeProductos);
let cantidad:number[]=new Array(cantidadDeProductos);

let i:number;

let precio:number[]=0;
let suma:number=0;
let cant:number=0;


for(i=0;i<cantidadDeProductos;i++){
let total: string=" ";

productos[i]=String(prompt("Ingrese el producto"));
cantidad[i]=Number(prompt("Cuantos productos "+productos[i]+ "desea comprar"));
 
precioUnitario[i]=Number(prompt("Ingrese el precio para el producto "+productos[i]));

 
 precio= cantidad[i]*precioUnitario[i];
        suma += precio;
    cant+= cantidad[i];

 total= "Productos  "+cant+"  Total de la compra " +suma;
 console.log(cantidad[i]+" "+productos[i]+ " Punit "+precioUnitario[i]+" Ptotal "+precio);}
console.log(total);
  


