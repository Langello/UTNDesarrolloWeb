const express = require('express'); //importacion
const app = express(); // ejecutar express 
const alumnos = [
    {
        id: 11,
        nombre: "Juan Perez",
        apellido: "Perez",
        email: "jperez@codoacodo.com",
        cursos: [
            { codigo: "k200", nombre: "Paradigmas de la Programación" },
            { codigo: "k201", nombre: "Testing " }
        ]
    },

    {
        id: 12,
        nombre: "Facundo Perez",
        email: "fperez@codoacodo.com",
        cursos: [
            { codigo: "k200", nombre: "Programación Fullstack. js" },
            { codigo: "k201", nombre: "Testing " }
        ]
    }

]

function esElMismoId(alumno, idquery){
    return alumno.id == idquery
}

function setearUserId(req, res, next){ //next hace referencia al middleware siguiente
    req.userId = req.params.id //paso 1
    next()
}

function validateUserId(req, res, next){ 
    const {userId} = req
    if (isNaN(userId)){
        next({
            message: "Por favor, ingresá un ID correcto."
        })
    } else{
        next()
    } 
    //paso2 
}

function badRequest(err, req, res, next){
    console.log(err)
    //console.log(res)
    res.status(404)
    res.json({
        message: err.message
    })
    return new Error ("Por favor, ingresá un ID correcto.") 
}

function okMiddleware(req,res){
    res.json(req.alumnoObtenido)

}

const obtenerUsuarioPorId = function (req, res, next) { //req consulta res respuesta - params : parametros
    const {userId} = req  //obtener atributo de la request. Es lo mismo que "const userId = req.userId"
    const alumnoObtenido = alumnos.find((alumno) => esElMismoId(alumno, userId)) //find() recibe una funcion "a". La funcion "a" recibe un elemento y devuelve un booleano (true o false) paso3
    //res.status(200)
    req.alumnoObtenido = alumnoObtenido
    next()

}



const ruta = '/alumno/:id'
app.get(ruta, setearUserId, validateUserId, obtenerUsuarioPorId, badRequest, okMiddleware)

app.listen(3002, () => {
    console.log('Servidor iniciado')
})