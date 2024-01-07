let num = parseInt(prompt("Ingrese un número (no mayor de 50):"));
if (isNaN(num) || num <= 0 || num > 50) {
  alert("Por favor, ingrese un número válido.");
} else {
  let piramide = "";
  for (let i = num; i >= 1; i--) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += i;
    }
    piramide = piramide + fila + "<br>";
  }

  document.write(piramide);
}
