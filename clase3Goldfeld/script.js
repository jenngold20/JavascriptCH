
let numDni = parseInt(prompt("Ingresá tu número de DNI"));
let contraseniaCorrecta = false;
for (let i = 1; i <= 3; i++){
   let contrasenia = parseInt(prompt("Ingresá tu DNI como contraseña"))
   if (contrasenia === numDni){
      contraseniaCorrecta = true;
      break;
   }
}

if (contraseniaCorrecta) {
   alert("Contraseña correcta");
} else {
   alert("Contraseña incorrecta")
}
