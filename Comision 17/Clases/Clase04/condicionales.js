let amanecer = false

/* if (amanecer) {
    console.log('Hoy tengo clases a las 9:00');
}else{
    console.log('Entonces sigo durmiendo');
} */

let edad = 19
let adulto = 18
let acceso = ''

if (edad < 16) {
    acceso = 'Prohibido'
} else if (edad >= 16 && edad < 18){

    /* Y si viene acompañado de un adulto */
    if (adulto === 18) {
        acceso = 'Permitido'
    }
    acceso = 'Permitido solo acompañado de un mayor'
} else {
    acceso = 'Permitido'
}

/* console.log(acceso); */

let luz = "Verde"
/* toLowerCase() Es para pasarlos a Minuscula
toUpperCase() Es para pasarlos a Mayusculas
*/
console.log(typeof luz);

if (typeof luz === 'number'){
    console.log('Debe pasar un texto por terminal');
}else if  (luz !== undefined) {
    luz = luz.toLowerCase() 
}

switch (luz) {
    case 'roja':
        console.log('No puede pasar');
        break;
    case 'amarilla':
        console.log('Pisa el freno');
        break;
    case 'verde':
        console.log('Puede pasar');
        break;
    case undefined:
        console.log('Por favor encender el semaforo');
        break;
    default:
        console.log('Puede pasar con precaucion');
        break;
}