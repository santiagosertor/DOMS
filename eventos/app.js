import { valido } from "./modulos";
valido;
const formulario = document.querySelector("form");
const nombre = document.querySelector("[name=nombre]");
const apellido = document.querySelector("[name=apellido]");
const telefono = document.querySelector("[name=telefono]");
const documento = document.querySelector("[name=documento]");
const usuario = document.querySelector("[name=usuario]");
const contrasena = document.querySelector("[name=contrasena]");
const politicas = document.querySelector("[name=politicas]");
const boton = document.querySelector("[name=btn_validar]");
// const usuarios=document.querySelector("")

const validar = (event) => {
  if (nombre.value === "") {
    if (nombre.nextElementSibling) {
      nombre.nextElementSibling.remove();
    }
    nombre.focus();
    nombre.style.border = "1px solid red";
    nombre.classList.add("error");
    const span = document.createElement("span");
    span.textContent = "El campo de nombre es obligatorio";
    span.classList.add("error");
    nombre.insertAdjacentElement("afterend", span);
    event.preventDefault();
  }

  if (apellido.value === "") {
    if (apellido.nextElementSibling) {
      apellido.nextElementSibling.remove();
    }
    apellido.focus();
    apellido.style.border = "1px solid red";
    apellido.classList.add("error");
    const span = document.createElement("span");
    span.textContent = "El campo de apellido es obligatorio";
    span.classList.add("error");
    apellido.insertAdjacentElement("afterend", span);
    event.preventDefault();
  }

  if (telefono.value === "") {
    if (telefono.nextElementSibling) {
      telefono.nextElementSibling.remove();
    }
    telefono.focus();
    telefono.style.border = "1px solid red";
    telefono.classList.add("error");
    const span = document.createElement("span");
    span.textContent = "El campo de telefono es obligatorio";
    span.classList.add("error");
    telefono.insertAdjacentElement("afterend", span);
    event.preventDefault();
  }

  if (documento.value === "") {
    if (documento.nextElementSibling) {
      documento.nextElementSibling.remove();
    }
    documento.focus();
    documento.style.border = "1px solid red";
    documento.classList.add("error");
    const span = document.createElement("span");
    span.textContent = "El campo de documento es obligatorio";
    span.classList.add("error");
    documento.insertAdjacentElement("afterend", span);
    event.preventDefault();
  }

  if (usuario.value === "") {
    if (usuario.nextElementSibling) {
      usuario.nextElementSibling.remove();
    }
    usuario.focus();
    usuario.style.border = "1px solid red";
    usuario.classList.add("error");
    const span = document.createElement("span");
    span.textContent = "El campo de usuario es obligatorio";
    span.classList.add("error");
    usuario.insertAdjacentElement("afterend", span);
    event.preventDefault();
  }

  if (contrasena.value === "") {
    if (contrasena.nextElementSibling) {
      contrasena.nextElementSibling.remove();
    }
    contrasena.focus();
    contrasena.style.border = "1px solid red";
    contrasena.classList.add("error");
    const span = document.createElement("span");
    span.textContent = "El campo de contraseña es obligatorio";
    span.classList.add("error");
    contrasena.insertAdjacentElement("afterend", span);
    event.preventDefault();
  }
};

const letras = (event) => {
  const regexp = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]$/;
  if (
    !regexp.test(event.key) &&
    event.key !== "Backspace" &&
    event.key !== "Tab"
  ) {
    event.preventDefault();
  }
};

const numeros = (event) => {
  if (
    !/^\d$/.test(event.key) &&
    event.key !== "Backspace" &&
    event.key !== "Tab"
  ) {
    event.preventDefault();
  }
  if (event.target.value.length >= 10 && event.key !== "Backspace") {
    event.preventDefault();
  }
};

const limpiar = (event) => {
  if (event.target.value != "") {
    event.target.classList.remove("error");
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
};

const acepta = (e) => {
  if (!politicas.checked) {
    boton.setAttribute("disabled", "");
  } else {
    boton.removeAttribute("disabled");
  }
};

addEventListener("DOMContentLoaded", acepta);
politicas.addEventListener("change", acepta);

formulario.addEventListener("submit", validar);
nombre.addEventListener("keydown", letras);
apellido.addEventListener("keydown", letras);
telefono.addEventListener("keydown", numeros);
documento.addEventListener("keydown", numeros);
nombre.addEventListener("blur", limpiar);
apellido.addEventListener("blur", limpiar);
telefono.addEventListener("blur", limpiar);
documento.addEventListener("blur", limpiar);
usuario.addEventListener("blur", limpiar);
contrasena.addEventListener("blur", limpiar);