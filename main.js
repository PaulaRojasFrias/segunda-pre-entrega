class Turno {
    constructor(dia, hora, nombre) {
        this.dia = dia;
        this.hora = hora;
        this.nombre = nombre;
    }
}

const turnos = [];

turnos.push(new Turno("Lunes 21 de agosto", "15:00 hs", "Luis"));
turnos.push(new Turno("Lunes 21 de agosto", "16:00 hs", "Pia"));
turnos.push(new Turno("Martes 22 de agosto", "17:00 hs", "Maria Jose"));


function asignarTurno() {
    nombre = prompt("ingrese su nombre");
    opcion = parseInt(prompt("Ingresa el número del turno a seleccionar \n 1) Martes 22 de agosto 18:00hs \n 2) Miercoles 23 de agosto 15:00hs \n 3) Jueves 24 de agosto 17:00hs"));

    switch (opcion) {
        case 1:
            turnos.push(new Turno("Martes 22 de agosto", "18:00 hs", nombre));
            break;
        case 2:
            turnos.push(new Turno("Miercoles 23 de agosto", "15:00 hs", nombre));
            break;

        case 3:
            turnos.push(new Turno("Jueves 24 de agosto", "17:00 hs", nombre));
            break;
    }


    alert(`Turno asignado con exito! \n\n Fecha: ${turnos[(turnos.length) - 1].dia} \n Hora: ${turnos[(turnos.length) - 1].hora} \n Nombre: ${turnos[(turnos.length) - 1].nombre}`);
}



function buscarTurno() {
    cliente = prompt("ingrese nombre");
    turnoEncontrado = turnos.find((item) => item.nombre === cliente);


    if (turnoEncontrado) {
        let resultado = `Turno Encontrado: \n Fecha: ${turnoEncontrado.dia}  \n Hora: ${turnoEncontrado.hora}  \n Nombre: ${turnoEncontrado.nombre}`;
        alert(resultado);
    }

    else {
        alert("No existe un turno a ese nombre");
    }
}



function turnosDelDia() {
    fecha = prompt("Ingrese dia");

    let turnosDia = turnos.filter((item) => item.dia.includes(fecha));
    turnosDia.forEach((item) => {
        alert(` Fecha: ${item.dia} \n Hora: ${item.hora} \n Nombre: ${item.nombre}`);
    })
    if (turnosDia.length == 0) {
        alert("No existen turnos para ese dia");
    }
}



function main() {
    opcion = parseInt(prompt("Ingresa el número de la operación \n 1) Asignar un turno \n 2) Buscar turno\n 3) Consultar turnos de un dia"));

    switch (opcion) {
        case 1:
            asignarTurno();
            break;
        case 2:
            buscarTurno();
            break;

        case 3:
            turnosDelDia();
            break;
    }
}

alert("Bienvenido a la gestión de turnos!");
main();