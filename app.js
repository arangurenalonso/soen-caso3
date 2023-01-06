"use strict";
const GI = {
  createElement(tag, atributes) {
    let element = document;
    return document.createElement(tag);
  },
};

const to_do = [
  "Alimentar al perro",
  "Estudiar para prueba escrita",
  "Pagar taxes",
  "Pasear a perro",
  "Comprar entradas para el cine",
];

const boxContainer = document.getElementById("box-container");
const elementoUl = document.createElement("ul");

to_do.forEach((x) => {
  let elementLi = document.createElement("li");
  elementLi.innerHTML = ` <input type="checkbox" name="" id=""><span>${x}</span>`;
  elementoUl.append(elementLi);
});
boxContainer.append(elementoUl);

let textosLI = document.querySelectorAll("span");

[...textosLI].forEach((x) => console.log(x));
