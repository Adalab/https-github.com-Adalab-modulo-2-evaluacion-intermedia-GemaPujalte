"use strict";

const buttonElement = document.querySelector(".button");
const inputNumber = document.querySelector(".js-button__number");
const inputClue = document.querySelector(".js-clue");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getNumber() {
  const randomNumber = getRandomNumber(100);
  console.log(randomNumber);
  const numberValue = inputNumber.value; //valor del input donde escribo el numero
  inputClue.value = "Demasiado alto";

  if (numberValue > randomNumber) {
    inputClue.innerHTML = inputClue.value = "Demasiado alto";
  } else if (numberValue < randomNumber) {
    inputClue.innerHTML = inputClue.value = "Demasiado bajo";
  }
}

buttonElement.addEventListener("click", getNumber);
