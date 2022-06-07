const fs = require('process');
let process = require('process')
let archivo = require('./funcionesDeTareas')
let accion = process.argv[2]

switch(accion){
    case "listar":
        console.log('\nListado de tareas');
        console.log('--------------------');
        archivo.listarTareas();
        break;
    case "crear":
        let titulo = process.argv[3]
        let estado = process.argv[4]
        console.log()
        console.log('\nTu tarea fue creada con exito, genial mas espacio se consume');
        console.log('--------------------');
        archivo.crearTareas(titulo,estado);
        break;
    case "pegaso":
        console.log('Golpe de Pegaso!!');
        break;
    case "rockvsedm":
        console.log('Bunka, Junka, Shakalaka BAM!!');
        break;
    case "krilin":
        console.log('GOKUUUUUU!!');
        break;
    case "sonic":
        console.log('Sonic: Nothin starts until you take action, if you have time to worry then run!');
        console.log('Silver: I won`t give uptime, it all depends on me, i can`t lose not when i`m so close');
        console.log('Shadow: If the world chooses to become my enemy, i will fight like i always have');
        break;
    case "trigger":
        console.log('Don`t lose your way!!');
        break;
    default:
        console.log('No entiendo lo que quieres hacer. pero te dire algo, sin mirar el codigo, he dejado un par de curiosidades, aver si las descubres ^^');
        break;
}