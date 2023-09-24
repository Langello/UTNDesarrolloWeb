const express = require("express"); // Importamos la libreria
const app = express(); // Creamos una instancia de la libreria
const port = 3001; // Definimos el puerto

const validator = require("email-validator");//validar formato de email con la biblioteca validator-email
const alumnos = [
  {
    id: 1,
    nombre: "Juan Perez",
    apellido: "Perez",
    email: "jperez@codoacodo.com",
    cursos: [
      { código: "k200", nombre: "Paradigmas de la Programación" },
      { código: "k201", nombre: "Testing" },
    ],
  },
  {
    id: 2,
    nombre: "Facundo Perez",
    email: "fperez@codoacodo.com",
    cursos: [
      { código: "k200", nombre: "Programación Fullstack. js" },
      { código: "k201", nombre: "Testing" },
    ],
  },
];
let idSiguiente = alumnos.length + 1; // Definimos el ID del siguiente alumno para que no se repitan

app.use(express.json()); // Configuramos el middleware para analizar el cuerpo de las solicitudes con contenido JSON
app.use(express.urlencoded({ extended: false })); // Configuramos el middleware para analizar el cuerpo de las solicitudes con contenido codificado en URL



// Rutas
// Lista de alumnos
app.get("/alumno/list", (req, res) => {
  res.json(alumnos); // Devuelve la lista de alumnos en formato JSON
});
// Alumno
app.get("/alumno/:id", (req, res) => {
  const id = req.params.id; // Obtiene el ID proporcionado en la URL
  const alumno = alumnos.find((alumno) => alumno.id === parseInt(id)); // Busca el alumno con el ID correspondiente

  if (alumno) {
    res.json(alumno); // Devuelve el alumno encontrado en formato JSON
  } else {
    res.status(404).json({ mensaje: "Alumno no encontrado" }); // Devuelve una respuesta de error si no se encuentra el alumno
  }
});
// Alumno nuevo
app.post("/alumno", (req, res) => {
  const { nombre, apellido, email, cursos } = req.body; // Obtiene los datos proporcionados en el cuerpo de la solicitud
  const nuevoAlumno = {
    id: idSiguiente,
    nombre,
    apellido,
    email,
    cursos,
  }; // Crea un nuevo alumno con los datos proporcionados
  //validar si el email ya exite y si teine formato valido
  if (alumnos.find((alumno) => alumno.email === email)) {
    res.status(400).json({ mensaje: "El email ya existe" });
  } else if (!validator.validate(email)) {
    res.status(400).json({ mensaje: "El email no tiene formato valido" });
  } else {
    alumnos.push(nuevoAlumno); // Agrega el nuevo alumno a la lista de alumnos
  }
  idSiguiente++; // Incrementa el ID para el siguiente alumno
  res.status(201).json(nuevoAlumno); // Devuelve una respuesta de creación y el alumno nuevo en formato JSON
});
// Borrar alumno
app.delete("/alumno/:id", (req, res) => {
  const id = req.params.id; // Obtiene el ID proporcionado en la URL
  const alumno = alumnos.find((alumno) => alumno.id === parseInt(id)); // Busca el alumno con el ID correspondiente
  if (alumno) {
    const indice = alumnos.indexOf(alumno); // Obtiene el índice del alumno en la lista de alumnos
    alumnos.splice(indice, 1); // Elimina el alumno de la lista de alumnos
    res.status(200).json(alumno); // Devuelve el alumno eliminado en formato JSON
  } else {
    res.status(404).json({ mensaje: "Alumno no encontrado" }); // Devuelve una respuesta de error si no se encuentra el alumno
  }
});

// Agregar curso a un alumno
app.put("/alumno/:id/curso", (req, res) => {
  const id = req.params.id; // Obtiene el ID del alumno proporcionado en la URL
  const { código, nombre } = req.body; // Obtiene los datos del curso proporcionados en el cuerpo de la solicitud

  const alumno = alumnos.find((alumno) => alumno.id === parseInt(id)); // Busca el alumno con el ID correspondiente

  if (alumno) {
    const nuevoCurso = { código, nombre }; // Crea un nuevo objeto de curso con los datos proporcionados
    alumno.cursos.push(nuevoCurso); // Agrega el nuevo curso a la lista de cursos del alumno
    res.status(200).json(alumno); // Devuelve el alumno actualizado en formato JSON
  } else {
    res.status(404).json({ mensaje: "Alumno no encontrado" }); // Devuelve una respuesta de error si no se encuentra el alumno
  }
});

// Quitar curso de un alumno
app.patch("/alumno/:id/curso/:codigo", (req, res) => {
  const id = req.params.id; // Obtiene el ID del alumno proporcionado en la URL
  const codigo = req.params.codigo; // Obtiene el código del curso proporcionado en la URL

  const alumno = alumnos.find((alumno) => alumno.id === parseInt(id)); // Busca el alumno con el ID correspondiente

  if (alumno) {
    const indice = alumno.cursos.findIndex((curso) => curso.código === codigo); // Busca el índice del curso en la lista de cursos del alumno
    if (indice !== -1) {
      alumno.cursos.splice(indice, 1); // Elimina el curso de la lista de cursos del alumno
      res.status(200).json(alumno); // Devuelve el alumno actualizado en formato JSON
    } else {
      res.status(404).json({ mensaje: "Curso no encontrado para el alumno" }); // Devuelve una respuesta de error si no se encuentra el curso para el alumno
    }
  } else {
    res.status(404).json({ mensaje: "Alumno no encontrado" }); // Devuelve una respuesta de error si no se encuentra el alumno
  }
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
