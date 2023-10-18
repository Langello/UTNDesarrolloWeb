import {Alumno} from '../alumnos/alumnoMODEL.js';



// Obtener un Alumno
async function  obtenerAlumno(){
  const alumno = await Alumno.findByPk(1);
  console.log(alumno);
}

//obtenerAlumno();

// Consultar lista de Alumnos
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

//crearAlumno();

// Actualizar Alumno
async function actualizarAlumno(){
  const alumno = await Alumno.findByPk(1);
  alumno.Email = 'fperez@codoacodo.com';
  await alumno.save();
  console.log(alumno);
}

//actualizarAlumno();

// Eliminar Alumno
async function eliminarAlumno(){
  const alumno = await Alumno.findByPk(1);
  await alumno.destroy();
  console.log(alumno);
}

//eliminarAlumno();

