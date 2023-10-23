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
  return await Alumno.findAll({
    attributes: ["id", "Nombre", "Apellido", "Email"],
  })
    .then((alumnos) => {
      return alumnos;
    })
    .catch((error) => {
      throw error;
    });
}

//consultarAlumnos();

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
  const alumnoAtributs = {
    Email: "fpsholarrdfsd@codoacodo.com",
    Nombre: "Carlos",
  };

  const alumnoQuery = {
    where: {
      id: id,
    },
  };

  return await Alumno.update(alumnoAtributs, alumnoQuery)
    .then((alumno) => {
      return alumno.dataValues;
    })
    .catch((error) => {
      throw error;
    });
}

//actualizarAlumno(3);

// Eliminar Alumno
async function eliminarAlumno(id) {
  return await Alumno.destroy({
    where: {
      id: id,
    },
  })
    .then((alumno) => {
      return alumno;
    })
    .catch((error) => {
      throw error;
    });
}

//eliminarAlumno(2);