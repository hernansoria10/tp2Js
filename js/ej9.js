for (let i = 1; i <= 500; i++) {
  if (i % 4 !== 0 && i % 9 !== 0) {
    document.write(i + "<br>");
  }
  if (i % 4 === 0 || i % 9 === 0 ) {
    if(i % 4 === 0 && i % 9 === 0){
        document.write(i + " (es multiplo de 4 y 9)" +"<br>")
    }
    else if( i % 4 === 0){
    document.write(i + " (multiplo de 4)" + "<br>");}
    else if (i % 9 === 0) {
        document.write(i + " (multiplo de 9)" + "<br>");
      }
  }
  let linea = ' <span class = "fontLinea "> ------------------------------ </span> <br>';
  if (i % 5 === 0) {
    document.write(linea);
  }
}
