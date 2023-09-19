console.log("Hello Typescript");

const element = document.getElementById("demo") as HTMLElement | null;
if (element) {
  // Hacer algo con el elemento seleccionado
  element.innerHTML = "Hola TypeScript";
}
console.log(element);

const palabra: string = "Hola";

const ticket: string[] = ["123", "123"];

ticket.push("123");

interface Alumno {
  nombre: string;
  edad: number;
  altura: number;
  ciudad: string;
  pais: string;
  estudiante: boolean;
  lenguajes: string[];
}
type Alumnos = {
  nombre: string;
  edad: number;
  altura: number;
  ciudad: string;
  pais: string;
  estudiante: boolean;
  lenguajes: string[];
};

const alumno: Alumnos = {
  nombre: "Sergio",
  edad: 25,
  altura: 1.75,
  ciudad: "Buenos Aires",
  pais: "Argentina",
  estudiante: true,
  lenguajes: ["JavaScript", "TypeScript", "Python"],
};

class Alumnoos {
  nombre?: string;
  edad?: number;
  altura?: number;
  ciudad?: string;
  pais?: string;
  estudiante?: boolean;
  lenguajes?: string[];

  estudiar(): string {
    return `${this.nombre}`;
  }

  dormir(): string {
    return `${this!.estudiante} se fue a dormitar`;
  }

  constructor(
    nombre: string,
    edad: number,
    altura: number,
    ciudad: string,
    pais: string,
    estudiante: boolean,
    lenguajes: string[]
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.ciudad = ciudad;
    this.pais = pais;
    this.estudiante = estudiante;
    this.lenguajes = lenguajes;
  }
}

const alumno1 = new Alumnoos(
  "Sergio",
  25,
  1.75,
  "Buenos Aires",
  "Argentina",
  true,
  ["JavaScript", "TypeScript", "Python"]
);
alumno1.dormir();

// hacer una calse negocio que tenga 4 atributos, un constructor y tres metodos con todos los getesr y seteers

class Negocio {
  private nombre: string;
  private direccion: string;
  private telefono: string;
  private categoria: string;

  constructor(nombre: string, direccion: string, telefono: string, categoria: string) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.categoria = categoria;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public setTelefono(telefono: string): void {
    this.telefono = telefono;
  }

  public getCategoria(): string {
    return this.categoria;
  }

  public setCategoria(categoria: string): void {
    this.categoria = categoria;
  }

  public metodo1(): void {
    // Implementación del método 1
  }

  public metodo2(): void {
    // Implementación del método 2
  }

  public metodo3(): void {
    // Implementación del método 3
  }
}