let texto = prompt("Ingrese un texto")
texto = texto.toUpperCase()
const vocales = "AEIOU";
let posicion = -1;
for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto.charAt(i))) {
        posicion = i;
        break;
    }
}
if (posicion !== -1) {
    document.write(`La'${texto[posicion]}' está en la posición ${posicion}.`);
} else {
    document.write("No se encontraron vocales en el texto.");
}
