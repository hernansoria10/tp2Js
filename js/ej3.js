let respuesta
do{
    respuesta = confirm('desea agregar una cadena de texto?')
    if (respuesta == true){
        let palabra = prompt('ingrese una nueva cadena de texto')
        document.write ( `${palabra}-`)
    }
}while( respuesta == true)