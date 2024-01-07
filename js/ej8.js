let num = parseInt(prompt("Ingrese un número no mayor de 50:"));
if (isNaN(num) || num <= 0 || num > 50) {
  alert("Por favor, ingrese un número válido.");
}
else{
    let piramidex = ""
    for(i = 1; i <= num ; i++){
        piramidex = piramidex + i 
        document.write(piramidex + "<br>")
    }
    



}