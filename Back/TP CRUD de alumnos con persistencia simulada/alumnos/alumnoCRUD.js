import {Alumno} from '../alumnos/alumnoMODEL.js';

// Consultar Alumnos
async function  consultarAlumnos(){
  const alumnos = await Alumno.findAll();
  console.log(alumnos);
}

//consultarAlumnos();

// Salta error de permisos

// Crear Alumno
async function crearAlumno(){
  const alumno = await Alumno.create({
    Nombre: 'Facundo',
    Apellido: 'Franco',
    Email: 'fperez@codoacodo.com'
  });
  console.log(alumno);
}

crearAlumno();