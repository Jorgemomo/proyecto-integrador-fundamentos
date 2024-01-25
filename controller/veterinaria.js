// Clase Veterinaria
class Veterinaria {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  descripcionVeterinaria() {
    return `La veterinaria ${this.nombre}, es una de las más prestigiosas, del sector ubicada enla dirección ${this.direccion}. 
    Nuestra misión es darle bienestar a tu mascota y tranquilidad ea nuestros clientes de que sus peludisto están en las mejores manos.
    Contamos con servicio de urgencia y nuestro númmero de contacto es ${this.telefono}
    `;
  }
}

const miVeterinaria = new Veterinaria(
  "Enyoi pets",
  "Medellín (Antioquia)",
  "3216549870"
);

function seleccionDeTitulo(selector) {
  document.querySelector(selector).innerHTML = miVeterinaria.nombre;
}

seleccionDeTitulo(".title__nav");
seleccionDeTitulo(".title__modal");

document.getElementById("description__veterinaria").innerHTML =
  miVeterinaria.descripcionVeterinaria();
