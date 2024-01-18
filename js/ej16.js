let texto = prompt("ingrese un texto")
let textoAlreves = ""
let cantidadCaracteres = texto.length;
for(let i=texto.length-1; i>=0; i--){
    textoAlreves += texto.charAt(i)
}

document.write(textoAlreves)
