const express = require("express"); // Importamos la libreria
const app = express(); // Creamos una instancia de la libreria
const port = 3000; // Definimos el puerto


app.get("/", (req, res) => {
  
  res.send(
    "hola mundo"
  );
})

app.get("/persona/:idPersona", (req, res) => {
  const personas = [
    { id: 1, nombre: "Sebas", apellido: "avila" },
    { id: 2, nombre: "Gastón", apellido: "perez" },
    { id: 3, nombre: "Juan", apellido: "perez" },
    { id: 4, nombre: "Pedro", apellido: "perez" },
    { id: 5, nombre: "Luis", apellido: "perez" },
    { id: 6, nombre: "Luis", apellido: "ochoa" },
  ];
  const idPersona = req.params.idPersona;
  const resultado = personas.filter((persona) => persona.id == idPersona);
  console.log(req.params);
  res.send(resultado);

  //   req.query es para obtener la informacion que viene de las variables de los signos de preguntas de la url, por ejemplo : /persona?nombre=
  // req.params es para obtener la informacion de un identificador de la ruta, por ejemplo : /:idPersona
});

// Iniciamos el servidor con listen
app.listen(port, () => {
  console.log(`Funcionando en el puerto ${port}`);
});
