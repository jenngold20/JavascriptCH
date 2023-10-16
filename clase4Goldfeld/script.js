let billetera = parseInt(prompt("¿Cuánto dinero querés depositar en tu billetera virtual?"));

function sumar(billetera, valor){
let suma = billetera + valor;
return suma;
 }

function restar(billetera, valor){
   let resta = billetera - valor
return resta;
 }

console.log(sumar(billetera, 100));
console.log(restar(billetera, 50));
console.log("El dinero disponible es $" + billetera);