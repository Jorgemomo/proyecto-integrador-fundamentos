// Clase Personas
class Personas {
  constructor(nombre, apellido, edad, cedula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
  }
}


/*
Diagrama de base de datos relacional:
En un modelo relacional, podríamos tener tres tablas: Personas, Animales y Veterinarias. Cada tabla tendría sus propios atributos y una clave primaria para identificar cada registro de forma única. Además, podríamos tener relaciones entre las tablas, como una relación de uno a muchos entre Personas y Animales, donde una persona puede tener varios animales, pero un animal solo puede pertenecer a una persona.

Aquí te muestro un ejemplo de cómo podría verse el diagrama de base de datos relacional:

Diagrama de base de datos relacional

Diagrama de base de datos no relacional:
En un modelo no relacional, como MongoDB, podríamos tener tres colecciones: Personas, Animales y Veterinarias. Cada colección tendría sus propios documentos y cada documento tendría sus propios campos. A diferencia del modelo relacional, no tendríamos relaciones explícitas entre las colecciones, sino que podríamos usar referencias internas o externas para relacionar los documentos.

Aquí te muestro un ejemplo de cómo podría verse el diagrama de base de datos no relacional:

Diagrama de base de datos no relacional

En este ejemplo, cada documento en las colecciones Personas, Animales y Veterinarias tendría sus propios campos, como se muestra en el diagrama relacional anterior. Además, en el caso de la colección Animales, podríamos tener una referencia al documento correspondiente en la colección Personas para indicar quién es el dueño del animal.


*/
