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
  private telefono: number;
  private abierto: boolean;

  constructor(nombre: string, direccion: string, telefono: number, abierto: boolean) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.abierto = abierto;
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

  public getTelefono(): number {
    return this.telefono;
  }

  public setTelefono(telefono: number): void {
    this.telefono = telefono;
  }

  public getAbierto(): boolean {
    return this.abierto;
  }

  public setAbierto(abierto: boolean): void {
    this.abierto = abierto;
  }

    //si la hora esta dentro de las 08:00 y 20:00 el negocio esta abierto
  public estaAbierto(): void {
    let horaActual: number = new Date().getHours();
    const horaAbre: number = 8;
    const horaCierra: number = 20;
    if (horaActual >= horaAbre && horaActual < horaCierra) {
      this.setAbierto(true);
      console.log(`${this.nombre} esta abierto y faltan menos de ${horaCierra - horaActual} hs para cerrar`);
    } else {
      this.setAbierto(false);
      console.log(`${this.nombre} esta cerrado y abre en menos de ${horaActual- horaAbre} hs`);
    }
  }
  //si la distancia es mayor a 15 kilometros el delivery no llega
  public delivery(distancia: number): void {
    return distancia > 15 ? console.log("El delivery no llega") : console.log("Estas dentro del radio del delivery");
  }

  public recomendar(): string {
    return `${this.nombre} agradece tu recomendacion`
  }
}


// Crear un objeto de la clase Negocio
const laQuintana = new Negocio("La Quintana", "Calle 123", 123456789, true);
// saber si esta abierto
laQuintana.estaAbierto();
// saber si el delivery llega
laQuintana.delivery(17);
// recomendar
laQuintana.recomendar();

// Crear un ojeto de la clase Negocio
const rapanui = new Negocio("Rapanui", "Calle 8955", 156358856, false);
// saber si esta abierto
rapanui.estaAbierto();
// saber si el delivery llega
rapanui.delivery(1);
// recomendar
rapanui.recomendar();

