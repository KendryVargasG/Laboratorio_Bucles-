const prompt = require('prompt-sync')();

let opcion;

do {
    console.log("========= MENÚ NEQUI =========");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");
console.log("==============================");
opcion = prompt("Selecciona una opción: ");
console.log("==============================");

if (opcion === "1") {
    console.log("Has seleccionado la opción ver saldo.");
}
if (opcion === "2") {
    console.log("Has seleccionado la opción enviar dinero.");
}
if (opcion === "3") {
    console.log("Has seleccionado la opción recargar.");
}
if (opcion === "4") {
    console.log("Has seleccionado la opción salir.");
}
} while (opcion !== "4");