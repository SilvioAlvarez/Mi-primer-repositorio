let dimension:number=Number(prompt("Ingrese la cantidad de productos"));
let productos:string[]= new Array (dimension);
let precioUnitario:number[]=new Array(dimension);
let cantidad:number[]=new Array(dimension);

let i:number=0;
let precio:number=0;
let suma:number=0;

function cargarProductos(productos:string[],dimension:number){

for(i=0;i<dimension;i++){

productos[i]=String(prompt("Ingrese el producto"));
cantidad[i]=Number(prompt("Cuantos productos "+productos[i]+ " desea comprar")); 
precioUnitario[i]=Number(prompt("Ingrese el precio para el producto "+productos[i]));
 
 precio= cantidad[i]*precioUnitario[i];

console.log(cantidad[i]+" "+productos[i]+ " P.unitario "+precioUnitario[i]+"   P.total "+precio);
}
return productos;

}
function buscarTotal(cantidades:number[],dimensiones:number){
   let cant:number=0;
   
  for(i=0;i<dimensiones;i++){
     cant+=cantidad[i];
   
    suma+= cantidad[i]*precioUnitario[i];
  }console.log("Productos "+cant+" precio total "   +suma);
}
function participarPremios(sumar:number){
   if(sumar>1000 && sumar<2000){
      console.log("Usted participa por el sorteo de un TV Led");
      }else if(sumar>2000 && sumar<3000){
      console.log("Usted participa por el sorteo de una Moto");
      }else if(sumar>3000){
      console.log("Usted participa por el sorteo de un 0 Km");
      }else{
      console.log("Gracias por su compra");
      }
      }
      
cargarProductos(productos,dimension);
buscarTotal(cantidad,dimension);
participarPremios(suma);