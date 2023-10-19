import { Alumno } from "../alumnos/alumnoMODEL.js";

// Obtener un Alumno
async function obtenerAlumno(id) {
  return await Alumno.findByPk(id)
    .then((alumno) => {
      if (!alumno) {
        throw new Error("Alumno no encontrado");
      }
      return alumno.dataValues;
    })
    .catch((error) => {
      throw error;
    });
}

//obtenerAlumno(2);

// Consultar lista de Alumnos
async function consultarAlumnos() {
  const alumnos = await Alumno.findAll({
    attributes: ["id", "Nombre", "Apellido", "Email"],
  });
  return alumnos.map((alumno) => alumno.dataValues);
}

//consultarAlumnos();

// Salta error de permisos

// Crear Alumno
async function crearAlumno() {
  return await Alumno.create({
    Nombre: "Facundo",
    Apellido: "Franco",
    Email: "fpsrrdfsd@codoacodo.com",
  })
    .then((alumno) => {
      return alumno.dataValues;
    })
    .catch((error) => {
      throw error;
    });
}

//crearAlumno();

// Actualizar Alumno
async function actualizarAlumno(id) {
  const alumnoAtributs = 
    {
      Email: "fpsholarrdfsd@codoacodo.com",
      Nombre: "Carlos"
    }
  
  const alumnoQuery = {
    where: {
      id: id
    }
  }

  const alumno =  await Alumno.update(alumnoAtributs, alumnoQuery);
  return alumno;
}

//actualizarAlumno(3);

// Eliminar Alumno
async function eliminarAlumno(id) {
  const alumno = await Alumno.findByPk(id);
  await alumno.destroy();
  return alumno;
}

eliminarAlumno(3);
