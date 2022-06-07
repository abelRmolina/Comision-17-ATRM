let nombreCompleto = "Cristian Elias"

console.log(nombreCompleto.length);
console.log(nombreCompleto.indexOf("Elias"));
console.log(nombreCompleto.slice(-5));

let arrayNombre = ["C","r","i","s","t","i","a","n"," ","E"]
/* 
console.log(arrayNombre[2]);//devuelve i 
console.log(nombreCompleto[2]); //devuelve i
*/

let passwordSegura = "               Hola que tal?        "

let saludo = passwordSegura.trim()+ " " + nombreCompleto

let arraySaludoRapido = passwordSegura.trim().split(" ")

let saludoRapido = passwordSegura.trim()

let saludoModificado = saludoRapido.replace('que','como')
let saludoModificado2 = saludoModificado.replace('tal','estas')

let saludoCordial = saludoRapido.replace('que tal','como estas')

console.log(saludoCordial);


