let nota = parseInt(prompt('ingrese nota'));
if(nota >= 0 && nota <= 2){
    document.write('muy deficiente')
}
if(nota > 2 && nota <= 4){
    document.write('insuficiente')
}
if(nota > 4 && nota <= 6){
    document.write('suficiente')
}
if(nota === 7){
    document.write('bien')
}
if(nota > 7 && nota <= 9){
    document.write('Notable')
}
if(nota === 10){
    document.write('sobresaliente')
}

if(nota < 0 || nota > 10 || isNaN(nota)){
    if(isNaN(nota)){
        document.write('Intoroduce un numero Valido') 
    }
    else{
        document.write('Numero erroneo')
    }
}



