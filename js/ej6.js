let piramide = '';
for (let i = 1; i <= 30; i++) {
  let fila = '';
  for (let j = 1; j <= i; j++) {
   fila = fila + i;
  }
  piramide = piramide + fila + '<br>';
}

document.write(piramide);