let dn = document;

// let header = document.querySelectorAll('header h1')
let container = document.querySelectorAll("container");
let id = document.querySelector("#api");
let formulario = dn.forms;
let imagenes = dn.images;
let script = dn.scripts;
let lista = document.querySelectorAll("ul.list > li.item");
// let cards = document.querySelectorAll('div.cards > div.car')
let card = document.querySelector("div.card");
console.log(card.children);
console.log("padre", card.parentElement);
console.log("hermano", card.previousElementSibling);

let body = document.querySelector("body");
console.log(body.previousElementSibling);
console.clear();

// let elementos = document.querySelector("elemento");
// elemento.textconted = "nuevoelemento";
// elemento.innerHTML = "<p> texto <p>";
setTimeout(() => {
  body.classList.add("bg-red");
}, 6000);

console.log(body.classList);
