/*

class Producto {
 constructor (id, gameName, gameTematica, gameGenero, gameAsistencia, precioDelJuego, imagen){
   this.id= id;
   this.Nombre = gameName;
   this.Tematica = gameTematica;
   this.Genero = gameGenero;
   this.Asistencia = gameAsistencia;
   this.Precio = precioDelJuego;
   this.imagen = imagen;
}
}

const juego1 = new Producto ("1", "Phasmophobia", "Terror", "Acción", "Cooperativo", 800, "./imagenes/phasmo.jpg");
const juego2 = new Producto ("2", "Forza Horizon 5", "Aventura", "Carreras", "Un jugador", 3200, "./imagenes/forza.jpg");
const juego3 = new Producto ("3", "Minecraft", "Acción", "Rol", "Cooperativo", 500, "./imagenes/minecraft.jpg");
const juego4 = new Producto ("4", "Don't Starve", "Aventura", "Supervivencia", "Cooperativo", 1600, "./imagenes/dont.jpg");
const juego5 = new Producto ("5", "Halo", "Acción", "Free tu Play", "Multijugador", 4100, "./imagenes/halo.jpg");

console.log(Producto);

const juegos = [];

juegos.push(juego1, juego2, juego3, juego4, juego5);
console.log(juegos);



 //const buscarTerror = juegos.find((juego) => {
//     return juego.Tematica == "Terror"
// })
// console.log(buscarTerror)



const contenedorProductos = document.querySelector('.juegos');
const contenedorCarrito = document.querySelector('.carrito');


let juegosCarrito = [];

let dataCarrito = localStorage.getItem("carrito")
if(dataCarrito)
juegosCarrito = JSON.parse(dataCarrito)


function pintar() {
    $('#total').html(juegosCarrito.length)
}

function saveProduct(producto) {
    juegosCarrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(juegosCarrito))

    pintar()
}



document.addEventListener("DOMContentLoaded" , () => {
    mostrarJuegos();
})

function mostrarJuegos() {
    juegos.forEach((juego) => {
        const divJuego = document.createElement('div');
        divJuego.classList.add('card');

        const imagen = document.createElement('img');
        imagen.src = juego.imagen;
        imagen.classList.add('imagen-producto');

        const nombreJuego = document.createElement('h3');
        nombreJuego.textContent = juego.Nombre;
        nombreJuego.classList.add("nombre-producto");

        const precioJuego = document.createElement('h4');
        precioJuego.textContent = "$" + juego.Precio;
        precioJuego.classList.add("precio-producto");

        const btnCarrito = document.createElement('button');
        btnCarrito.textContent = "Agregar al carrito 🛒";
        btnCarrito.classList.add('btn-carrito');
        btnCarrito.onclick = () => {
            agregarACarrito(juego.id);
        }



        divJuego.appendChild(imagen);
        divJuego.appendChild(nombreJuego);
        divJuego.appendChild(precioJuego);

        divJuego.appendChild(btnCarrito);

        contenedorProductos.appendChild(divJuego);

    })
}


function agregarACarrito(id) {
    const juegoSeleccionado = juegos.find( juego =>juego.id === id);

    juegosCarrito.push(juegoSeleccionado)

    mostrarJuegosCarrito(juegosCarrito);
}


function mostrarJuegosCarrito(arreglo) {
    arreglo.forEach((juego) => {
        const divJuego = document.createElement('div');
        divJuego.classList.add('card');

        const imagen = document.createElement('img');
        imagen.src = juego.imagen;
        imagen.classList.add('imagen-producto');

        const nombreJuego = document.createElement('h2');
        nombreJuego.textContent = juego.Nombre;
        nombreJuego.classList.add("nombre-producto");

        const precioJuego = document.createElement('h4');
        precioJuego.textContent = "$" + juego.Precio;
        precioJuego.classList.add("precio-producto");

        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = "Eliminar 🗑️";
        btnBorrar.classList.add('btn-carrito');
        btnBorrar.onclick = () => {
            BorrarDelCarrito(juego.id);
        }

        divJuego.appendChild(imagen);
        divJuego.appendChild(nombreJuego);
        divJuego.appendChild(precioJuego);
        divJuego.appendChild(btnBorrar);

        contenedorCarrito.appendChild(divJuego);
    })
}

function BorrarDelCarrito(id) {
    const juegoSeleccionado = juegos.find( juego =>juego.id === id);

    juegosCarrito.slice(juegoSeleccionado)

}









/* function limpiarHtmlPrevio() {
    contenedorCarrito.innerHTML = "";
}

 let productos = document.getElementById("Productos");

 for(const juego of juegos){
   let contenedorProd = document.createElement("Productos")

   contenedorProd.innerHTML= `
   <h3> Juego: ${juego.Nombre} </h3>
   <p> $ ${juego.Precio}</p>
   <img src="${juego.imagen}">
   <button>Agregar al carrito </button>
   <hr>
   `;
productos.appendChild(contenedorProd);
}
   //  addEventListener("click", () => agregarACarrito(gameName))


const contenedorCarrito = document.querySelector('.Carrito');
const contenedorPrecio = document.querySelector('.Precio');

let Carro = []; */


/* function agregarACarrito(gameName) {
    const juegoAgregado = juegos.find( juego =>juego.gameName === gameName);
    juego = juegos.find(function (juego) {
      if(juego.gameName == gameName)
          return true;
      else
          return false;
    }
    mostrarJuegosAgregados();)}

function mostrarCarrito() {
  let contenedorCarrito = document.getElementById("Carrito");
  let precioTotal = 0

  contenedorCarrito.innerHTML = "";
  htmlString = "CARRITO =====<ul>";
  for(const gameName in Carro ) {
      let juego = Carro[gameName]
      htmlString += `
          <li> ${juego.nombre}, $ ${juego.precio}
          <button gameName="carrito_${gameName}" class="eliminar"> 🗑️</button>
          </li>`
      precioTotal += juego.precio;
  }
  htmlString += "</ul>";

  contenedorCarrito.innerHTML = htmlString;

  let contenedorPrecio = document.getElementById("Precio");
  contenedorPrecio.innerHTML = `TOTAL: ${precioTotal}`
}*/






/* document.addEventListener("DOMContentLoaded" , () => {
    mostrarCarrito();
})

function mostrarCarrito() {
    juegos.forEach((juego) => {


    })
} */


/* let bienvenido = document.getElementById("banner");
const funcion = function () {
    alert("¡Bienvenido!");
}
bienvenido.onclick = funcion;
 */


  /* let precioDelJuego = parseInt(prompt("Ingresa el precio del juego"));
 console.log("El precio del juego sin impuestos es de " + "$"+ precioDelJuego);

 let iva = precioDelJuego * 0.21;
  console.log("El precio del IVA es de $ " + iva);

    let impuestoPais = precioDelJuego * 0.08;
   console.log("El Impuesto País es de $ " + impuestoPais);

 let percepcionDeGanancias = precioDelJuego * 0.35;
    console.log("El precio de la percepción de Ganancias es de  $ " + percepcionDeGanancias);

   function sumar (precio1, precio2, precio3, precio4){
     return precio1 + precio2 + precio3 + precio4;
   }
       let total = sumar (precioDelJuego, iva, impuestoPais, percepcionDeGanancias);

   alert("El precio total del juego es de $" + total); */
/*
  function countDuplicate(numbers) {
    numbers.sort();
    let ans = []
    for (let i =0; i < numbers.length; i++){
               if(numbers[i] === numbers[i+1]){
                if(ans[ans.length -1] !== numbers[i]){
                ans.push(numbers[i])
                   }
      }
        }
    
        return ans.length;
    }

    let numbers= [10,10,10,20,20,1,2,10,1];

    console.log(countDuplicate(numbers));


/*
let numbers= [10,10,10,20,20,1,2,10,1];
    function countDuplicate(numbers) {
        let repetidos = [];
        for (let i = 0; i < numbers.length; i++) {
            let count = numbers[i];
            let sum = 0;
            for(let j = 0; j<numbers.length;++j) {
                if(count === numbers[j]) {
                 sum++
                    if (sum > 1) {
                        repetidos.push(numbers[i])
                    }
                }
            }
        }
        return repetidos.filter((i, ij)=> repetidos.indexOf(i) === ij);
    }
    
    console.log(countDuplicate(numbers)) 
    */
/*
function minParentheses( s)
{
     let balance = 0;
    let parentheses = 0;
 
    for (let i = 0; i < s.length; ++i) {
 
if( balance += s[i] == '(' ){
1} else {-1};

 
        if (balance  == -1) {
            parentheses = parentheses + 1; // parentheses += 1
            balance = balance + 1;             // balance +=1;
        }
    }
 
return balance + parentheses;
}
 
let s= "())";
*/

let s= "()()()()()()()()())(";

function getMin(s){
//Write your code here

let balance = 0;
let parentheses = 0;
[...s].forEach((pepito, i) => {
balance += s[i] == '(' ? 1 : -1;

if (balance == -1) {
parentheses += 1;
balance += 1;
}})

return balance + parentheses;
}

console.log(getMin(s));
