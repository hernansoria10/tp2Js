
let edad1 = parseInt(prompt("Ingrese la primera edad:"));
let nombre1 = prompt("Ingrese el primer nombre:");
let edad2 = parseInt(prompt("Ingrese la segunda edad:"));
let nombre2 = prompt("Ingrese el segundo nombre:");
let edad3 = parseInt(prompt("Ingrese la tercera edad:"));
let nombre3 = prompt("Ingrese el tercer nombre:");
let mayor;
let nombreMayor;

if (edad1 >= edad2 && edad1 >= edad3) {
    mayor = edad1;
    nombreMayor = nombre1;
} 
else if (edad2 >= edad1 && edad2 >= edad3) {
    mayor = edad2;
    nombreMayor = nombre2;
} else {
    mayor = edad3;
    nombreMayor = nombre3;
}

document.write("El mayor es: " + nombreMayor + " con una edad de " + mayor + " años.");
