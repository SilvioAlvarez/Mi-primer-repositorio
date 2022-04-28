let  btnEnv  =  documento . getElementById ( "btnEnviar" ) ;
let  dato  =  documento . formularios [ 0 ] . dato ;
let  rotulo  =  documento . getElementById ( "rotulo" ) ;

btnEnv . addEventListener ( "clic" ,  ( )  =>  {
  consola _ log ( "La altura es" , dato . value ) ;
} )
rótulo . innerHTML  =  "Indique la altura de la persona" ;

