// Clase Personas
class Personas {
  constructor(nombre, apellido, edad, cedula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
  }

  especialistaCX() {
    return `A cargo del médico veterinario ${this.nombre} ${this.apellido}, con edad de ${this.edad} y un recorrido de más de 12 años de experiencia en procedimientos y tratamientos. Todos acordes a la salud integral de tu mascota. Su registro profesional ${this.cedula} se encuentra entre los más destacados del área de la veterinaria. `;
  }
}

const especialista = new Personas("Jorge", "Morales", "37", "123456789");

document.querySelector(".especialista").innerHTML =
  especialista.especialistaCX();
