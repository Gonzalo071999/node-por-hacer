//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

const porhacer = require('./por-hacer/por-hacer');


//console.log(argv);
let comando = argv._[0];

switch (comando) {

    case 'crear':
        //console.log('Crear por hacer');
        let tarea = porhacer.crear(argv.descipcion);
        console.log(tarea);

        break;
    case 'listar':

        let listado = porhacer.getListado();

        for (let tarea of listado) {
            console.log('==========Por Hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('============================='.green);
        }

        break;
    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descipcion, argv.completado);
        console.log(actualizado);

        break;
    case 'borrar':
        let borrado = porhacer.borrar(argv.descipcion);
        console.log(borrado);

        break;


    default:
        console.log('Comando no reconcido');

}