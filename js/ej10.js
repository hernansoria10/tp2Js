const filas = parseInt(prompt("ingrese una cantidad de filas"));
const columnas = parseInt(prompt("ingrese una cantidad de columnas"));
let FxC = filas * columnas;
document.write(`<table>
<tbody>
  `);

for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  document.write(`<tr>`);
  for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++) {
    document.write("<td>");
    document.write(FxC)
    FxC = FxC - 1;
  }

  for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++) {
    document.write("</td>");
  }

  document.write(`</tr>`);
}
document.write(`
</tbody>
</table>`);
//no se por que al ejecutar las celdas que contienen los numeros se muestran separadas
