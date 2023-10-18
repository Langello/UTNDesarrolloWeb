import {Alumno} from '../alumnos/alumnoMODEL.js';


async function  consultarAlumnos(){
  const alumnos = await Alumno.findAll();
  console.log(alumnos);
}

consultarAlumnos();

// Salta error de permisos