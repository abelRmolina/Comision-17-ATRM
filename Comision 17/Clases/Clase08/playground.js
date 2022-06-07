/* Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

1. Un texto.

2. La palabra que vamos a buscar para reemplazar.

3. La palabra que vamos a usar para reemplazar.

La función deberá devolver el texto con la palabra reemplazada.

Ejemplo: */


let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');

let frase = 'La comision 17 es mala onda'

function reemplazoFastFast(texto,palabra1,palabra2) {
    let textoReemplazado = texto.replace(palabra1,palabra2)
    return textoReemplazado
}

console.log(reemplazoFastFast(frase,'mala','buena')) //'Este texto es buena onda'