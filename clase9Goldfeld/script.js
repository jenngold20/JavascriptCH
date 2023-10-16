class Producto{
 constructor (gameName, gameTematica, gameGenero, gameAsistencia, precioDelJuego, imagen){
   this.Nombre = gameName;
   this.Tematica = gameTematica;
   this.Genero = gameGenero;
   this.Asistencia = gameAsistencia;
   this.Precio = precioDelJuego;
   this.imagen = imagen;
}
}

const juego1 = new Producto("Phasmophobia", "Terror", "Acción", "Cooperativo", 800, "./imagenes/phasmo.jpg");
const juego2 = new Producto ("Forza Horizon 5", "Aventura", "Carreras", "Un jugador", 3200, "./imagenes/forza.jpg");
const juego3 = new Producto ("Minecraft", "Acción", "Rol", "Cooperativo", 500, "./imagenes/minecraft.jpg");
const juego4 = new Producto ("Don't Starve", "Aventura", "Supervivencia", "Cooperativo", 1600, "./imagenes/dont.jpg");
const juego5 = new Producto ("Halo", "Acción", "Free tu Play", "Multijugador", 4100, "./imagenes/halo.jpg");

console.log(Producto);

const juegos = [];

juegos.push(juego1, juego2, juego3, juego4, juego5);
console.log(juegos);



 //const buscarTerror = juegos.find((juego) => {
//     return juego.Tematica == "Terror"
// })
// console.log(buscarTerror)


//  let precioDelJuego = parseInt(prompt("Ingresa el precio del juego"));
//  console.log("El precio del juego sin impuestos es de " + "$"+ precioDelJuego);

//  let iva = precioDelJuego * 0.21;
//   console.log("El precio del IVA es de $ " + iva);

//    let impuestoPais = precioDelJuego * 0.08;
//   console.log("El Impuesto País es de $ " + impuestoPais);

//  let percepcionDeGanancias = precioDelJuego * 0.35;
//    console.log("El precio de la percepción de Ganancias es de  $ " + percepcionDeGanancias);

//    function sumar (precio1, precio2, precio3, precio4){
//      return precio1 + precio2 + precio3 + precio4;
//   }
//    let total = sumar (precioDelJuego, iva, impuestoPais, percepcionDeGanancias);

//   alert("El precio total del juego es de $" + total);


 let productos = document.getElementById("Productos");
 console.log("Productos: ")
 console.log(productos)

 for(const juego of juegos){
   let contenedor = document.createElement("carrito")

   contenedor.innerHTML= `
   <h3> Juego: ${juego.Nombre} </h3>
   <p> $ ${juego.Precio}</p>
   <img src="${juego.imagen}">
   <button>Agregar al carrito 🛒</button>
   <hr>
   `;
productos.appendChild(contenedor);
console.log(juego)
}

let bienvenido = document.getElementById("banner");
const funcion = function () {
    alert("¡Bienvenido!");
}
bienvenido.onclick = funcion;
