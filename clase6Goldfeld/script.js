function registroNuevo (nombre, apellido, correo, telefono, usuario, contrasenia) {
   this.nombre = nombre;
   this.apellido = apellido;
   this.correo = correo;
   this.telefono = telefono;
   this.usuario = usuario;
   this.contrasenia = contrasenia;
}

function Juego (gameName, gameTematica, gameGenero, gameAsistencia, precioDelJuego){
   this.Nombre = gameName;
   this.Tematica = gameTematica;
   this.Genero = gameGenero;
   this.Asistencia = gameAsistencia;
   this.Precio = precioDelJuego;
}


const juego1 = new Juego("Phasmophobia", "Terror", "Acción", "Cooperativo", 800);
const juego2 = new Juego ("Forza Horizon 5", "Aventura", "Carreras", "Un jugador", 3200);

console.log(juego1);
console.log(juego2);


const juegos = [];

juegos.push(juego1, juego2);
console.log(juegos);


const buscarTerror = juegos.find((juego) => {
    return juego.Tematica == "Terror"
})
console.log(buscarTerror)



////////////////////////////////////////////////////////////////////////////////////////////
// let precioDelJuego = parseInt(prompt("Ingresa el precio del juego"));
// console.log("El precio del juego sin impuestos es de " + "$"+ precioDelJuego);

// let iva = precioDelJuego * 0.21;
// console.log("El precio del IVA es de $ " + iva);

// let impuestoPais = precioDelJuego * 0.08;
// console.log("El Impuesto País es de $ " + impuestoPais);

// let percepcionDeGanancias = precioDelJuego * 0.35;
// console.log("El precio de la percepción de Ganancias es de  $ " + percepcionDeGanancias);

// function sumar (precio1, precio2, precio3, precio4){
//    return precio1 + precio2 + precio3 + precio4;
// }

// let total = sumar (precioDelJuego, iva, impuestoPais, percepcionDeGanancias);
// alert("El precio total del juego es de $" + total);

////////////