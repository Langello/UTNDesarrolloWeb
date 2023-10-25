import { Cursos } from "./cursosModel.js";

// Crear cursos
async function crearCursos(req, res) {
    

    return await Cursos.create({
        Codigo: req.body.Codigo,
        Nombre: req.body.Nombre,
      })
        .then((cursos) => {
            return res.json(cursos);
        })
        .catch((error) => {
            return res.json(error);
        })
}

export { crearCursos };