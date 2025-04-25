let padre = document.querySelector(".container");
let node = document.createElement("h2");
node.textContent = "titulo de segundo nivel";
let text = document.createTextNode("palabra del nodo de text");
padre.appendChild(node);
padre.appendChild(text);

let list = document.querySelector(" #list ");
let css = document.createElement("li");
let html = document.createElement("li");
let js = document.createElement("li");

css.classList.add("item");
html.classList.add("item");
js.classList.add("item");

css.textContent = "css";
html.textContent = "html";
js.textContent = "js";

list.append(html, js, css);

let card = document.querySelector("cards");
let list_card = document.querySelector("#list");
let titulo = document.createElement("h2");
titulo.textContent = "titulo de la card";

console.log(card);
console.log(list_card);

// card.insertBefore(titulo, list_card);

let before = document.createElement("li");
before.classList.add("item", "before");
before.textContent = "el texto se a ordenado";

let affter = document.createElement("li");
affter.classList.add("item", "affter");
affter.textContent = " el texto rodenado del antes";

let beforend = document.createElement("li");
beforend.classList.add("item", "before");
beforend.textContent = "texto en el final";

let affternd = document.createElement("li");
affternd.classList.add("item");
affternd.textContent = " nuevo afftes agregado";

list_card.insertAdjacentElement("beforebegin", before);
list_card.insertAdjacentElement("beforeend", beforend);
list_card.insertAdjacentElement("afterbegin", affter);
list_card.insertAdjacentElement("afterend", affternd);

// --------------------------------------------
let card_dias = document.querySelector("#dias");

const dia = [
  {
    id: 1,
    nombre: "lunes",
    img: "https://picsum.photos/id/1/200/300",
    parrafo: "lunes ipsu dolor",
  },

  {
    id: 2,
    nombre: "martes",
    img: "https://picsum.photos/id/2/200/300",
    parrafo: "martes ipsu dolor",
  },

  {
    id: 3,
    nombre: "miercoles",
    img: "https://picsum.photos/id/3/200/300",
    parrafo: "miercoles ipsu dolor",
  },

  {
    id: 4,
    nombre: "Jueves",
    img: "https://picsum.photos/id/4/200/300",
    parrafo: "jueves ipsu dolor",
  },

  {
    id: 5,
    nombre: "viernes",
    img: "https://picsum.photos/id/5/200/300",
    parrafo: "viernes ipsu dolor",
  },
  {
    id: 6,
    nombre: "Sabado",
    img: "https://picsum.photos/id/6/200/300",
    parrafo: "sabado ipsu dolor",
  },

  {
    id: 7,
    nombre: "Domingo",
    img: "https://picsum.photos/id/7/200/300",
    parrafo: "domingo ipsu dolor",
  },
];

dia.map((dia) => {
  console.log(dia);
  let card = document.createElement("div");
  let card_header = document.createElement("div");
  let card_titulo = document.createElement("h2");
  card.classList.add("card");
  card_header.classList.add("card_header");
  card_titulo.classList.add("card_title");
  card_titulo.textContent = dia.nombre;
  card_header.append(card_titulo);
  card.append(card_header);
  card_dias.append(card);
});

dia.map((nombre, img, parrafo) => {
  //crear elementos
  let card = document.createElement("div");
  let card_header = document.createElement("div");
  let card_titulo = document.createElement("h2");
  let card_body = document.createElement("div");
  let imagen = document.createElement("img");
  let p = document.createElement("p");
  //AGREGAR STILOS
  card.classList.add("card");
  card_header.classList.add("card_header");
  card_titulo.classList.add("card_title");
  card_body.classList.add("card_body");
  imagen.classList.add("card_img");
  p.classList.add("card_paragraph");
  //administrar atributos
  imagen.setAttribute("src", img);
  imagen.setAttribute("alt", nombre);
  //unir los elementos
  card_titulo.textContent = dia.nombre;
  p.textContent = parrafo;
  card_body.append(imagen, p);
  card_header.append(card_titulo);
  card.append(card_header);
  card.append(card_body);
  card_dias.append(card);
});
