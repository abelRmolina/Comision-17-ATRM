let process = require('process')
let concesionaria = require('./autos')



let argv = process.argv
/* console.log(argv); */

switch (argv[2]) {
    case 'listar':
        console.log(concesionaria.listar);
        break;
    case 'superlistar':
        concesionaria.listarFor();
        break;
    case 'agregar':
        let marca = argv[3]
        let modelo = argv[4]
        let year = argv[5]
        let km = argv[6]
        let precio = argv[7]
        let color = argv[8]
        console.log(concesionaria.agregar(marca,modelo,year,km,precio,color));
        break;
    default:
        console.log("No tenemos esa funcion por el momento por favor intentente con las siguientes:\n-listar");
        break;
}