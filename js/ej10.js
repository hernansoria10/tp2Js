const filas = parseInt(prompt("ingrese uns cantidad de filas"));
const columnas = parseInt(prompt("ingrese uns cantidad de columnas"));
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
