import { Alumno } from "../alumnos/alumnoMODEL.js";

// Obtener un Alumno
async function obtenerAlumno(req, res) {
  return await Alumno.findByPk(req.params.id)
    .then((alumno) => {
      if (!alumno) {
        return res.status(404).json("Alumno no encontrado");
      }
      return res.json(alumno);
    })
    .catch((error) => {
      return res.json(error);
    });
}

// Consultar lista de Alumnos
async function consultarAlumnos(req, res) {
  return await Alumno.findAll({
    attributes: ["id", "Nombre", "Apellido", "Email", "createdAt", "updatedAt"],
  })
    .then((alumnos) => {
      return res.json(alumnos);
    })
    .catch((error) => {
      return res.json(error);
    });
}

// Crear Alumno
async function crearAlumno(req, res) {
  return await Alumno.create({
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Email: req.body.Email,
  })
    .then((alumno) => {
      return res.json(alumno);
    })
    .catch((error) => {
      return res.json(error);
    });
}


// Eliminar Alumno
async function eliminarAlumno(req, res) {
  return await Alumno.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((alumno) => {
      if (!alumno) {
        return res.status(404).json("Alumno no encontrado");
      }
      return res.json(`Alumno ${req.params.id} eliminado con exito`);
    })
    .catch((error) => {
      return res.json(error);
    });
}

// // Actualizar Curso
// async function actualizarCurso(req, res) {
  
// }

// // Eliminar Curso
// async function eliminarCurso(req, res) {
// }


export {
  obtenerAlumno,
  crearAlumno,
  //actualizarCurso,
  eliminarAlumno,
  consultarAlumnos,
  //eliminarCurso
};
