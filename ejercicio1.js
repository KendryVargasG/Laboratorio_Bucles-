let  movimientos = [200000, -14000, 127000, -37000, 50000, -98000];
let  total = 0;
let  cantidadRetiros = 0;

for (let i = 0; i < movimientos.length; i++) {
     let movimientoActual = movimientos[i]; 
     total = total + movimientoActual;

if (movimientoActual < 0) {
    cantidadRetiros++;
    }

}

console.log("El total de movimientos realizados es: $" + total);
console.log("La cantidad de retiros realizados es: " + cantidadRetiros);
