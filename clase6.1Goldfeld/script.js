const feriantes = [
   {nombre: 'Juan', apellido: 'Marconi', edad: 64, sexo: 'Masculino'},
   {nombre: 'Dario', apellido: 'Ramirez', edad: 47, sexo: 'Masculino'},
   {nombre: 'Mariana', apellido: 'Gomez', edad: 34, sexo: 'Femenino'},
   {nombre: 'Rocio', apellido: 'Romano', edad: 18, sexo: 'Femenino'},
   {nombre: 'Roberto', apellido: 'Pugliese', edad: 25, sexo: 'Masculino'},
]

console.log(feriantes);


 feriantes.sort(function (a, b) {
   if (a.edad > b.edad) {
     return 1;
   }
   if (a.edad < b.edad) {
     return -1;
   }
   return 0;
 });

console.log(feriantes);