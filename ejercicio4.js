
let movimientos = [
{ valor:  200000, tipo: "Transferencia" },
{ valor:  0,      tipo: "Sin Valor" },
{ valor: -14000,  tipo: "Recarga" },
{ valor: -127000, tipo: "Recarga" },
{ valor: -37000,  tipo: "Pago comercio" },
{ valor: 50000,   tipo: "Transferencia" },
{ valor: -98000,  tipo: "Pago comercio" }
];

for(let i = 0; i < movimientos.length; i++) {
 
let movimientoActual = movimientos[i];
if (movimientoActual.valor === 0) {
continue;
}
if (movimientoActual.tipo === "Pago comercio") {
    console.log("Pago a Comercio encontrado en la posición N°: " + i);
break;
}

}

