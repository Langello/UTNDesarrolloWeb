import { body, validationResult } from "express-validator";
import { Alumno } from "../alumnos/alumnoMODEL.js";

const strongPassword = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
};

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
    attributes: [
      "id",
      "Nombre",
      "Apellido",
      "Email",
      "createdAt",
      "updatedAt",
      "password",
    ],
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
  // Validar los datos

  // Validar email
  await body("Email")
    .isEmail()
    .withMessage("El formato de email no es válido")
    .run(req);

  // Validar passsword fuerte
  await body("password")
    .isStrongPassword(strongPassword)
    .withMessage(
      "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número"
    )
    .run(req);

  // Verificar que el email no este en la base de datos
  await Alumno.findOne({
    where: {
      Email: req.body.Email,
    },
  })
    .then((alumno) => {
      if (alumno) {
        return res.status(400).json("Utiliza un email diferente");
      }
    })
    .catch((error) => {
      return res.json(error);
    });
  
  // Verificar los errores de validación de express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: messages });
  }

  // Crear Alumno
  return await Alumno.create({
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Email: req.body.Email,
    password: req.body.password,
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
