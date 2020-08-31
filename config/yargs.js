const descipcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion una taraea por hacer'

};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pediente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descipcion)

.command('actualizar', 'Actualizar el estado completado de una tarea', {
        descipcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descipcion
    })



.help()
    .argv;

module.exports = {
    argv
}