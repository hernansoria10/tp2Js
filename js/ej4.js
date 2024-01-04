let numero
let suma = 0
let respuesta
do {
    respuesta = confirm('desea agregar un numero?')
    if (respuesta == true){    
        numero = parseInt(prompt('digite un numero'))
        if (isNaN(numero)){
            alert('digite numeros por favor') 
            ;  
        }
        else if(Number.isInteger(numero)){
            suma = suma + numero;
        }
    }

}while(respuesta == true)
document.write('La suma de los numeros ingresados es de: '+ suma)