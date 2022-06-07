let process = require('process')
let concesionaria = require('./autos')

let argv = process.argv
/* console.log(argv); */

switch (argv[2]) {
    case 'listar':
        console.log(concesionaria.listar);
        break;
    default:
        console.log("No tenemos esa funcion por el momento por favor intentente con las siguientes:\n-listar");
        break;
}