// Clase Animales
class Animales {
  constructor(nombre, genero, raza) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
  }

  guarderia(sonido) {
    return `En la guarderia nos encanta consentir a tus mascotas: Juegos, relajación y nuevas mascotas para compartir. Tenemos el caso de ${this.nombre}, una ${this.genero} de raza ${this.raza}, que se compartir con las demás mascotas que tenemos en la guarderia. Es curioso siempre que se va hace un "${sonido}".`;
  }
  peluqueria() {
    return `La peluqueria de nuestra veterianaria le damos todo el cariño a tu mascota como si estuviese en casa, para que se acostumbre s nuestras estilistas. El caso de ${this.nombre}, un ${this.genero} de raza ${this.raza}, a este se le nota bastante cuando lo traen, es una mascota que le gusta estar a la moda`;
  }
}

const gato = new Animales("Zoe", "hembra", "siames");
const gato1 = new Animales("Zafiro", "macho", "persa");

function seleccionDeTitulo(selector, metodo) {
  document.querySelector(selector).innerHTML = metodo;
}

seleccionDeTitulo(".guarderia", gato.guarderia("maullido"));
seleccionDeTitulo(".peluqueria", gato1.peluqueria());
