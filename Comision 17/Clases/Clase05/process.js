let process = require('process')
let suma = require('./operaciones/suma')

console.log(process.argv);
let operacion = process.argv[2]
let num1 = process.argv[3]
let num2 = process.argv[4]

num1 = Number(num1)
num2 = +num2

switch (operacion) {
    case 'suma':
        let resultado = suma(num1,num2)
        console.log(resultado);
        break;
    case 'resta':
        
        break;
    case 'multiplicacion':
        
        break;
    case 'division':
        
        break;
    default:
        console.log('No se encuentra la operacion solicitada');
        break;
}

