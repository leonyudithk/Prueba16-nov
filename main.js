// ===========================================
const gatos = [
  {
    nombre: "Matilde  ",
    raza: "British Shorthair",
    edad: "6 Meses",
    ubicacion: "4140 Parker Rd. Allentown, New Mexico 31134",
    personalidad: ["Juguetón", "Tierno", "Inquieto"],
    historia:
      "Matilde es la mejor guarda espaldas, siempre esta ahi para conversar y recibirte cada día con un gran cariño. Fue rescatada y busca una persona que le pueda dar todo el amor que ella necesita.",
    usuario: "Juan Jesus",
    imgusuario: "https://i.ibb.co/0jk5rR8/Ellipse10.png",
    imagen: "https://i.ibb.co/4g8GDH8/gato1.jpg",
    genero: "https://i.ibb.co/QbnsP1H/Property-1-female.png",
    id: 1,
    categoria: "gato",
  },
  {
    nombre: "Kity",
    raza: "Bombay",
    edad: "9 meses",
    ubicacion: "Calle 12-15aa - 103 - Medellín Antioquia Colombia",
    personalidad: ["Inquieto", "Juguetón", "Curioso"],
    historia:
      "Kitty es un torbellino en todo su esplendor suele ser muy juguetona, muy inquieta y sobre todo suele ser muy cariñosa, al principio puede costar acostumbrarse a sus constantes juegos pero con el tiempo te darás cuenta que es una excelente compañera. La razón por la cual me tengo que alejar de Kitty es debido que mis padres se van a mudar conmigo y mi madre es alérgica a los gatos, espero encontrar una familia que la adopte y que le dé mucho amor.",
    usuario: "Fernanda Gutierrez",
    imgusuario: "https://i.ibb.co/JvbRKsn/Ellipse9.png",
    imagen: "https://i.ibb.co/rKBf4Z4/gato2.jpg",
    genero: "https://i.ibb.co/QbnsP1H/Property-1-female.png",
    id: 2,
    categoria: "gato",
  },
  {
    nombre: "Pelusa ",
    raza: "Birmano",
    edad: "11 meses",
    ubicacion: "Calle 53-12c - 113 - Medellín Antioquia Colombia",
    personalidad: ["Curioso", "Cariñoso", "Paciente"],
    historia:
      "Pelusa es un gato muy muy curioso, le encanta los días lluviosos y suele ser muy paciente con los niños, es un gato muy hogareño, le encanta dormir y no suele hacer daños en el hogar. La razón por la cual tenemos que dejar ir a pelusa es porque me salió una propuesta de trabajo en el exterior y tengo que viajar en poco tiempo, así que estoy buscando una persona que lo sepa cuidar y que le dé todo lo que necesite.",
    usuario: "Enrique López",
    imgusuario: "https://i.ibb.co/0jk5rR8/Ellipse10.png",
    imagen: "https://i.ibb.co/HB5nHCb/gato3.jpg",
    genero: "https://i.ibb.co/xFWqvbb/Component-5.png",
    id: 3,
    categoria: "gato",
  },
  {
    nombre: "Bombón",
    raza: "Gato americano ",
    edad: "10 meses",
    ubicacion: "Calle 74-53b - 93 - Medellín Antioquia Colombia",
    personalidad: ["Perezoso", "Tranquilo", "Cariñoso"],
    historia:
      "Le pusimos bombón debido a que desde que era muy pequeña le encantaba dormir en su camita así que cada vez que se acostaba parecía una bolita y eso dice mucho de ella, no es una gata muy activa ,suele dormir la mayor parte del día, y le encanta la compañía por las tardes. La razón por la cual tengo que dejar ir a bombón es porque trabajó jornadas muy extensas y no me está quedando tiempo para cuidarla así que busco alguien que le pueda dar todo lo que ella merece.",
    usuario: "Francisca Zapata",
    imgusuario: "https://i.ibb.co/JvbRKsn/Ellipse9.png",
    imagen: "https://i.ibb.co/rZWphyC/gato4.jpg",
    genero: "https://i.ibb.co/QbnsP1H/Property-1-female.png",
    id: 4,
    categoria: "gato",
  },
];

const perros = [
  {
    nombre: "Chester",
    raza: "Golden retriever",
    edad: "12 meses",
    ubicacion: "Calle 54-12b 108 - Medellín Antioquia  Colombia",
    personalidad: ["Aventurero", "Paciente", "Tranquilo"],
    historia:
      "Chester es un perro muy valiente y leal, por lo general suele ser muy tranquilo, casi ni se siente en la casa, además es muy cariñoso y obediente . La razón por la cual nos tenemos que separar de él es porque nos vamos a ir a vivir al exterior y él desafortunadamente no nos puede acompañar, entonces estamos en busca de una persona que lo sepa cuidar con todo el corazón.",
    usuario: "Enrique Gómez",
    imgusuario: "https://i.ibb.co/0jk5rR8/Ellipse10.png",
    imagen: "https://i.ibb.co/nsxG80m/perro2.jpg",
    genero: "https://i.ibb.co/xFWqvbb/Component-5.png",
    id: 1,
    categoria: "perro",
  },
  {
    nombre: "Rocky",
    raza: "Rottweiler",
    edad: "3 meses",
    ubicacion: "4140 Parker Rd. Allentown, New Mexico 31134",
    personalidad: ["Cariñoso", "Juguetón", "Inquieto"],
    historia:
      "Rocky es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la persona indicada.",
    usuario: "Maria Dolores",
    imgusuario: "https://i.ibb.co/JvbRKsn/Ellipse9.png",
    imagen: "https://i.ibb.co/WDfQyqB/perro1.jpg",
    genero: "https://i.ibb.co/xFWqvbb/Component-5.png",
    id: 2,
    categoria: "perro",
  },
  {
    nombre: "Papi",
    raza: "Chihuahua",
    edad: "5 meses",
    ubicacion: "Calle 32-120b 180 - Medellin Antioquia Colombia",
    personalidad: ["Cariñoso", "Juguetón", "Aventurero"],
    historia:
      "Papi es un perrito que llegó a nuestras vidas gracias a que lo encontramos en una casa abandonada, es un perro que es muy protector con sus dueños y que siempre está de buen humor. La razón por la que no lo puedo tener más es porque mi novio es alérgico a los perro asi que estamos buscando una familia que le de mucho amor.",
    usuario: "Sofia Álvarez",
    imgusuario: "https://i.ibb.co/JvbRKsn/Ellipse9.png",
    imagen: "https://i.ibb.co/tHgRQZh/perro3.jpg",
    genero: "https://i.ibb.co/xFWqvbb/Component-5.png",
    id: 3,
    categoria: "perro",
  },
  {
    nombre: "Pelusa",
    raza: "Bichón frisé",
    edad: "8 meses",
    ubicacion: "Calle 23-42a 113 - Medellín Antioquia Colombia",
    personalidad: ["Tranquilo", "Cariñoso", "Curioso"],
    historia:
      "Pelusa es una perrita que fue previamente entrenado en una academia canina así que suele ser muy obediente y tranquila, ella llego a mi vida ya que fue un regalo de un amigo pero lastimosamente dónde me voy a mudar no me permiten tener mascotas así que estoy buscando a una familia que la cuide y le de mucho amor.",
    usuario: "Martin Lemus.",
    imgusuario: "https://i.ibb.co/0jk5rR8/Ellipse10.png",
    imagen: "https://i.ibb.co/tpxYdr8/perro4.jpg",
    genero: "https://i.ibb.co/QbnsP1H/Property-1-female.png",
    id: 4,
    categoria: "perro",
  },
];

//= ==================================================

const btnGato = document.getElementById("#btngato");
const btnPerro = document.getElementById("#btnperro");

function handleGato() {
  console.log("entre a los Gatos");
  mascota(gatos, "gato");
}

function handlePerro() {
  console.log("entre a los Perros");
  mascota(perros, "perro");
}

const mascota = (mascota, animal) => {
  console.log(mascota, animal);
  const mostrar = document.querySelector(".mostrar-mascota");
  mostrar.innerHTML = "";
  mascota.forEach((element) => {
    console.log(element);
    mostrar.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src=${element.imagen} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">${element.historia}</p>
              <p class="card-text">Personalidad: ${element.personalidad}</p>
           
        </div>
        </div>      
      `;
  });
};
