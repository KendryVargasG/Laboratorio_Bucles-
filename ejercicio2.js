const prompt = require('prompt-sync')();

let pinCorrecto = "1234";
let intento = prompt("Ingresa tu PIN: ");

while (intento !== pinCorrecto) {
       console.log("PIN incorrecto, por favor intenta de nuevo.");  
       intento = prompt("Ingresa tu PIN nuevamente: ");
}

console.log("PIN correcto. Bienvenido a Nequi");