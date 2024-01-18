let cadena = prompt("ingrese una cadena");
cadena = cadena.toUpperCase()
const vocales = "AEIOU"
let contador = 0
for ( let i = 0; i < cadena.length ; i++){
    
    if(vocales.includes(cadena.charAt(i))){
        contador = contador+1 
   
}
}

 document.write(` "${cadena}" tiene ${contador} vocales`)
