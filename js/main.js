"use strict";

const buttonElement = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-inputNumber");
const clueElement = document.querySelector(".js-clue");
const attempsElement = document.querySelector(".js-attemps");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100); //esto va fuera de la funcion.
console.log(`El número aleatorio es ${randomNumber}`);

function getNumber(event) {
  event.preventDefault();

  const numberValue = parseInt(inputNumber.value); //valor del input donde escribo el numero

  /*TAMBIEN ENCONTRÉ ESTA MANERA DE COMPROBAR QUE ES UN NÚMERO LO QUE PONE EL USUARIO */
  // if (isNaN(numberValue)) {
  //   clueElement.innerHTML = "Tienes que introducir un número";
  //   return;
  // }
  if (!numberValue) {
    clueElement.innerHTML = "Tienes que introducir un número";
    return;
  }
  console.log(numberValue);

  if (numberValue >= 1 && numberValue <= 100) {
    if (numberValue > randomNumber) {
      clueElement.innerHTML = "Demasiado alto";
    } else if (numberValue < randomNumber) {
      clueElement.innerHTML = "Demasiado bajo";
    } else if (numberValue === randomNumber) {
      clueElement.innerHTML = "Has ganado campeona!!";
    }
  } else {
    clueElement.innerHTML = "El número debe estar entre 1 y 100";
  }
}

let count = 0;
function numbersOfAttemps() {
  count++;
  attempsElement.innerHTML = `Número de intentos: ${count}`;
}

buttonElement.addEventListener("click", getNumber);
buttonElement.addEventListener("click", numbersOfAttemps);
