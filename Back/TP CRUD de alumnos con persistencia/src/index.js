import express from "express";
import { autenticar } from "./db.js";
import {
  obtenerAlumno,
  crearAlumno,
  eliminarAlumno,
  consultarAlumnos,
} from "./alumnos/alumnoCRUD.js";

import { crearCursos } from "./cursos/cursosCRUD.js";

const app = express(); // Creamos una instancia de la libreria
const port = 3001; // Definimos el puerto

app.use(express.json()); // Configuramos el middleware para analizar el cuerpo de las solicitudes con contenido JSON
app.use(express.urlencoded({ extended: false })); // Configuramos el middleware para analizar el cuerpo de las solicitudes con contenido codificado en URL



//conexión a la base de datos
autenticar();

// Rutas
// Lista de alumnos
app.get("/alumno/list", consultarAlumnos);
// Alumno por ID
app.get("/alumno/:id", obtenerAlumno);
// Alumno nuevo
app.post("/alumno", crearAlumno);
// Borrar alumno
app.delete("/alumno/:id", eliminarAlumno);
// Agrergar un nuevo curso a un alumno
app.put("/alumno/:id/curso");
// Quitar curso de un alumno
app.patch("/alumno/:id/curso/:codigo");
// Crear un nuevo curso
app.post("/curso", crearCursos);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
