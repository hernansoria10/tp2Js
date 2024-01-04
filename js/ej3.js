let respuesta
do{
    respuesta = confirm('desea agregar una palabra?')
    if (respuesta == true){
        let palabra = prompt('ingrese una nueva palabra')
        document.write ( `${palabra}_`)
    }
}while( respuesta == true)