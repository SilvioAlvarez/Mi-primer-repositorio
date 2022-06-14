let nombresVendedor:string[]=["Camila","Franco","Sofía","Matías","Agustina"];
let vendedor1 :number[]=[32558,36165,34240,39273,34360,21347,20869,21493,23062,31908,30369,30652];
let vendedor2 :number[]=[27520,31480,24053,34823,32942,38477,23756,21413,26699,22045,25625,26855];
let vendedor3 :number[]=[20584,33473,34300,24598,33955,24040,39173,25542,25105,26759,29790,36218];
let vendedor4 :number[]=[27243,38774,21246,30691,24542,39771,31807,31641,20850,29837,37182,28006];
let vendedor5 :number[]=[23334,32687,25217,26844,27033,35244,25702,25781,35525,34874,38842,20562];
let mesesVenta :string[]=["Enero","Enero","Enero","Enero","Febrero","Febrero","Febrero","Febrero","Marzo","Marzo","Marzo","Marzo","Marzo"];
let semanasVentas:number[]=[1,2,3,4,1,2,3,4,1,2,3,4];
 let longitud:number=12; 
let promedios:number[]=0;
 
  

  function cargarArreglo(arreglo:number[],longitud:number){
    let indice:number;
    for(indice=0;indice<longitud;indice++){
      arreglo[indice]=vendedor[indice];
    }return arreglo;
  };

  function calcularVentaMaxima(arreglo:number[],mes:string[],semanas:number[],cantidad:number):string{
    let indice:number;
  let maximaVenta:number=0;
  let mesVenta:string="";
  let semanaVenta:number;
  let texto :string= "";
      for(indice=0;indice<arreglo.length;indice++){
        if(arreglo[indice]>maximaVenta)
        maximaVenta=arreglo[indice];
        mesVenta=mes[indice];
        semanaVenta=semanas[indice];
      }
      texto=" tuvo su mayor venta en la semana numero " + mesVenta+  " el mes de: "+ semanaVenta+ " por pesos: "+ maximaVenta;
      return texto;
  }
  
  console.log("La vendedora "+ nombresVendedor[0] + calcularVentaMaxima(vendedor1,semanasVentas,mesesVenta));
  console.log("El vendedor "+ nombresVendedor[1] +calcularVentaMaxima(vendedor2,semanasVentas,mesesVenta));
  console.log("La vendedora "+ nombresVendedor[2] +calcularVentaMaxima(vendedor3,semanasVentas,mesesVenta));
  console.log("El vendedor "+ nombresVendedor[3] +calcularVentaMaxima(vendedor4,semanasVentas,mesesVenta));
  console.log("La vendedora "+ nombresVendedor[4] +calcularVentaMaxima(vendedor5,semanasVentas,mesesVenta));

function calcularVentaMinima(arreglo:number[],mes:string[],semanas:number[],cantidad:number):string{
    let indice:number;
  let minimaVenta:number=40000;
  let mesVenta:string="";
  let texto :string= "";
  let semanaVenta:number=1;
      for(indice=0;indice<arreglo.length;indice++){
        if(arreglo[indice]<minimaVenta){
        minimaVenta=arreglo[indice];
        mesVenta=mes[indice];
        semanaVenta=semanas[indice];
      }
      texto=" tuvo su menor venta en la semana "+ mesVenta+ " en el mes de: "+ semanaVenta+ " por pesos: "+ minimaVenta;
      return texto;
      }}
          
   console.log("La vendedora "+ nombresVendedor[0] + calcularVentaMinima(vendedor1,semanasVentas,mesesVenta));
  console.log("El vendedor "+ nombresVendedor[1] +calcularVentaMinima(vendedor2,semanasVentas,mesesVenta));
  console.log("La vendedora "+ nombresVendedor[2] +calcularVentaMinima(vendedor3,semanasVentas,mesesVenta));
  console.log("El vendedor "+ nombresVendedor[3] +calcularVentaMinima(vendedor4,semanasVentas,mesesVenta));
  console.log("La vendedora "+ nombresVendedor[4] +calcularVentaMinima(vendedor5,semanasVentas,mesesVenta));

function promediarPorTrimestre(arreglo:number[],suma: number[],dimension:number):number[]{
  let sumaTotal:number=0;
    let promedio:number=0;
    let textos:string="";
   let indice:number=0;
for(indice=0;indice<arreglo.length;indice++){
     sumaTotal+=arreglo[indice];
}
 promedio=sumaTotal/(longitud);
 

textos=" su promedio mensual es "+ promedio+ "y trimestral "+promedio*3;

return textos;
}
 console.log("La vendedora "+ nombresVendedor[0] +  promediarPorTrimestre(vendedor1,promedios));
  console.log("El vendedor "+ nombresVendedor[1] + promediarPorTrimestre(vendedor2,promedios));
  console.log("La vendedora "+ nombresVendedor[2] +promediarPorTrimestre(vendedor3,promedios));
  console.log("El vendedor "+ nombresVendedor[3] + promediarPorTrimestre(vendedor4,promedios));
  console.log("La vendedora "+ nombresVendedor[4] + promediarPorTrimestre(vendedor5,promedios));
