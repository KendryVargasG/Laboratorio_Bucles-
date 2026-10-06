
let usuarios = [
{
nombre: "Juanita",
movimientos: [10000, -50000, 200000]
},
{
nombre: "Lucia",
movimientos: [20000, -8000, 30000]
},
{
nombre: "Pedro",
movimientos: [50000, -100000, 150000]
}
];

for (let i = 0; i < usuarios.length; i++) {
     let usuarioActual = usuarios[i];
     let totalUsuario = 0;
    

     for (let k = 0; k < usuarioActual.movimientos.length; k++) {
         totalUsuario = totalUsuario + usuarioActual.movimientos[k];
}
     console.log("Saldo disponible de  " + usuarioActual.nombre + ": $ " + totalUsuario);
}