let saludo = 'como estas'

/* for (let i = 0; i < 5; i++) {
    console.log(i + " - Hola " + saludo + "?");
} */

/* Para cerrar un bucle infinito Ctrl + C */
for (let i = 0; i < 2; i++) {
    console.log(`${i + 1} - Hola ${saludo}?`);
}

/* bastics = ``*/

let autos = require('./autos/data/autos.json')
/* console.log(autos); */
console.log(autos.length);

for (let i = 0; i < autos.length; i++) {
    console.log(i);
    console.log(autos[i].marca);
}