let dni;
let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
let resto;
let respuesta;
do {
  respuesta = confirm("desea agregar dni?");
  if (respuesta == true) {
    dni = parseInt(prompt("ingrese un dni"));
    while (isNaN(dni)) {
      alert("ingrese dni valido");
      dni = parseInt(prompt("ingrese dni"));
    }
    while (dni < 0 || dni > 99999999) {
      alert("ingrese dni valido");
      dni = parseInt(prompt("ingrese dni"));
    }
    resto = dni % 23;
    Asignacion = letras.charAt(resto);
    document.write(Asignacion);
  }
} while (respuesta == true);

// let dni = parseInt(prompt('ingrese DNI'))

// while(isNaN(dni)){
//     alert('ingrese un dni valido')
// }

// let letras ="TRWAGMYFPDXBNJZSQVHLCKE"
// let resto = dni % 23
// let letraAsignada = letras.charAt(resto)
// document.write(letraAsignada)
