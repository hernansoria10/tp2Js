let cadena = prompt('Ingrese una cadena de texto:');
    if (cadena !== null) {  
      let resultado = ''; 
      for (let i = 0; i < cadena.length; i++) { 
        resultado += cadena[i]; 
        if (i < cadena.length - 1 && cadena[i] !== ' ') {
          resultado += '-';
        }
      }  
      document.write(resultado);
    }