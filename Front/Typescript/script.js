"use strict";
console.log("Hello Typescript");
const element = document.getElementById("demo");
if (element) {
    // Hacer algo con el elemento seleccionado
    element.innerHTML = "Hola TypeScript";
}
console.log(element);
const palabra = "Hola";
const ticket = ["123", "123"];
ticket.push("123");
const alumno = {
    nombre: "Sergio",
    edad: 25,
    altura: 1.75,
    ciudad: "Buenos Aires",
    pais: "Argentina",
    estudiante: true,
    lenguajes: ["JavaScript", "TypeScript", "Python"],
};
class Alumnoos {
    estudiar() {
        return `${this.nombre}`;
    }
    dormir() {
        return `${this.estudiante} se fue a dormitar`;
    }
    constructor(nombre, edad, altura, ciudad, pais, estudiante, lenguajes) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.ciudad = ciudad;
        this.pais = pais;
        this.estudiante = estudiante;
        this.lenguajes = lenguajes;
    }
}
const alumno1 = new Alumnoos("Sergio", 25, 1.75, "Buenos Aires", "Argentina", true, ["JavaScript", "TypeScript", "Python"]);
alumno1.dormir();
// hacer una calse negocio que tenga 4 atributos, un constructor y tres metodos con todos los getesr y seteers
class Negocio {
    constructor(nombre, direccion, telefono, categoria) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.categoria = categoria;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    getTelefono() {
        return this.telefono;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    metodo1() {
        // Implementación del método 1
    }
    metodo2() {
        // Implementación del método 2
    }
    metodo3() {
        // Implementación del método 3
    }
}
