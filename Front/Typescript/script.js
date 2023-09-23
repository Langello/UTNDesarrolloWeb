console.log("Hello Typescript");
var element = document.getElementById("demo");
if (element) {
    // Hacer algo con el elemento seleccionado
    element.innerHTML = "Hola TypeScript";
}
console.log(element);
var palabra = "Hola";
var ticket = ["123", "123"];
ticket.push("123");
var alumno = {
    nombre: "Sergio",
    edad: 25,
    altura: 1.75,
    ciudad: "Buenos Aires",
    pais: "Argentina",
    estudiante: true,
    lenguajes: ["JavaScript", "TypeScript", "Python"],
};
var Alumnoos = /** @class */ (function () {
    function Alumnoos(nombre, edad, altura, ciudad, pais, estudiante, lenguajes) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.ciudad = ciudad;
        this.pais = pais;
        this.estudiante = estudiante;
        this.lenguajes = lenguajes;
    }
    Alumnoos.prototype.estudiar = function () {
        return "".concat(this.nombre);
    };
    Alumnoos.prototype.dormir = function () {
        return "".concat(this.estudiante, " se fue a dormitar");
    };
    return Alumnoos;
}());
var alumno1 = new Alumnoos("Sergio", 25, 1.75, "Buenos Aires", "Argentina", true, ["JavaScript", "TypeScript", "Python"]);
alumno1.dormir();
// hacer una calse negocio que tenga 4 atributos, un constructor y tres metodos con todos los getesr y seteers
var Negocio = /** @class */ (function () {
    function Negocio(nombre, direccion, telefono, abierto) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.abierto = abierto;
    }
    Negocio.prototype.getNombre = function () {
        return this.nombre;
    };
    Negocio.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Negocio.prototype.getDireccion = function () {
        return this.direccion;
    };
    Negocio.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Negocio.prototype.getTelefono = function () {
        return this.telefono;
    };
    Negocio.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Negocio.prototype.getAbierto = function () {
        return this.abierto;
    };
    Negocio.prototype.setAbierto = function (abierto) {
        this.abierto = abierto;
    };
    //si la hora esta dentro de las 10:00 a 20:00 el negocio esta abierto
    Negocio.prototype.estaAbierto = function () {
        var horaActual = new Date().getHours();
        var horaAbre = 8;
        var horaCierra = 20;
        if (horaActual >= horaAbre && horaActual < horaCierra) {
            this.abierto = true;
            console.log("".concat(this.nombre, " esta abierto y faltan menos de ").concat(horaCierra - horaActual, " hs para cerrar"));
        }
        else {
            this.abierto = false;
            console.log("".concat(this.nombre, " esta cerrado y abre en menos de ").concat(horaActual - horaAbre, " hs"));
        }
    };
    //si la distancia es mayor a 15 kilometros el delivery no llega
    Negocio.prototype.delivery = function (distancia) {
        if (distancia > 15) {
            console.log("El delivery no llega");
        }
        else {
            console.log("Estas dentro del radio del delivery");
        }
    };
    Negocio.prototype.recomendar = function () {
        console.log("".concat(this.nombre, " agradece tu recomendacion"));
    };
    return Negocio;
}());
// Crear un objeto de la clase Negocio
var laQuintana = new Negocio("La Quintana", "Calle 123", 123456789, true);
// saber si esta abierto
laQuintana.estaAbierto();
// saber si el delivery llega
laQuintana.delivery(17);
// recomendar
laQuintana.recomendar();
// Crear un ojeto de la clase Negocio
var rapanui = new Negocio("Rapanui", "Calle 8955", 156358856, false);
// saber si esta abierto
rapanui.estaAbierto();
// saber si el delivery llega
rapanui.delivery(17);
// recomendar
rapanui.recomendar();
