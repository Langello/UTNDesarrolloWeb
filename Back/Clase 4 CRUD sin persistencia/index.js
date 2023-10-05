const express = require('express'); //importacion de express
const { body, validationResult } = require('express-validator'); //importacion de validacion de password
const app = express(); // ejecutar express 
app.use(express.json()); // configurar el middleware para analizar el cuerpo de las solicitudes con contenido JSON
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

/**
 * Comprueba si el ID del alumno coincide con el ID proporcionado.
 *
 * @param {object} alumno - El objeto del alumno.
 * @param {number} idquery - El ID con el que comparar.
 * @return {boolean} Devuelve true si los IDs coinciden, false en caso contrario.
 */
function esElMismoId(alumno, idquery){
    return alumno.id == idquery
}


/**
 * Establece el ID de usuario en el objeto de solicitud y llama al siguiente middleware.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @param {Function} next - La función del siguiente middleware.
 * @return {undefined} Esta función no devuelve ningún valor.
 */
function setearUserId(req, res, next){ //next hace referencia al middleware siguiente
    req.userId = req.params.id //paso 1
    next()
}

/**
 * Valida un ID de usuario.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @param {Function} next - La siguiente función a llamar.
 * @return {void}
 */
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

/**
 * Maneja una solicitud incorrecta.
 *
 * @param {Error} err - El objeto de error.
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @param {Function} next - La siguiente función de middleware.
 * @return {Error} - El nuevo objeto Error con un mensaje.
 */
function badRequest(err, req, res, next){
    console.log(err)
    //console.log(res)
    res.status(404)
    res.json({
        message: err.message
    })
    return new Error ("Por favor, ingresá un ID correcto.") 
}

/**
 * Una función middleware que envía una respuesta JSON que contiene el objeto alumno obtenido.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {undefined}
 */
function okMiddleware(req,res){
    res.json(req.alumnoObtenido)
}

/**
 * Obtiene un usuario por su ID.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @param {Function} next - La siguiente función middleware.
 * @return {undefined} Esta función no devuelve ningún valor.
 */
const obtenerUsuarioPorId = function (req, res, next) { //req consulta res respuesta - params : parametros
    const {userId} = req  //obtener atributo de la request. Es lo mismo que "const userId = req.userId"
    const alumnoObtenido = alumnos.find((alumno) => esElMismoId(alumno, userId)) //find() recibe una funcion "a". La funcion "a" recibe un elemento y devuelve un booleano (true o false) paso3
    //res.status(200)
    req.alumnoObtenido = alumnoObtenido
    next()

}

/**
 * Por lo menos una mayuscula
 * por lo menos un numero
 * mayor a 8 caracteres
 * que tenga un caractere especial
 *   @param {string} req - La contraseña
 */
function errorValidatorMidleware(req, res, next){
    const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.send({ errors: result.array() });
        }
        next()
}

const esContraseñaFuerte = body('password').isStrongPassword(
    {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }
)
.withMessage('Password is not strong enough')

/**
+ * Finaliza el depurador y continúa la ejecución del programa.
+ *
+ * @param {Object} req - El objeto de solicitud.
+ * @param {Object} res - El objeto de respuesta.
+ * @param {Function} next - La próxima función en la cadena del middleware.
+ */
function endDebugger(req, res, next) {
    console.log('Body:  ', req.body)
    next()
}

const nameValidator = body('name').isLength({ min: 3 })
.withMessage('Name must be at least 3 characters long')

const ruta = '/alumno/:id'
app.get(ruta, setearUserId, validateUserId, obtenerUsuarioPorId, badRequest, okMiddleware)

app.post("/alumno", nameValidator, esContraseñaFuerte, errorValidatorMidleware, okMiddleware)

app.listen(3002, () => {
    console.log('Servidor iniciado')
})