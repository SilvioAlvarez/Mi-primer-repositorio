

/*let dibujarGuiones = () => {
  let linea :string= "-";
  for (let i:number=0; i <= 20; i++){
  linea = linea +"-";
  }
console.log(linea);
};
dibujarGuiones();*/


let dibujarGuiones = (cantidad:number):string => {
  let linea :string= "-";
  for (let i:number=0; i <= cantidad; i++){
  linea = linea +"-";
  }
console.log(linea);
};
dibujarGuiones(20)
dibujarGuiones(10)
dibujarGuiones(30)
