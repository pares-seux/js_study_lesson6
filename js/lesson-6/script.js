"use strict";

const isNumber = function (num) {
  const regexp = /^\d+$/;
  return !isNaN(parseFloat(num)) && isFinite(num) && regexp.test(num);
};

function startGame(attempts) {
  let number = Math.round(Math.random() * 101);
  const checkNumber = numbers(number, attempts, '');
  console.log(number);
  const gameResult = checkNumber(prompt("Угадай число от 1 до 100"));
  if (!confirm(gameResult) || gameResult === "Игра окончена!") {
    return;
  }
  startGame(10);

  function numbers(referenceNumber, attemptsCounter, result) {
  //let result = "";
  return function (guessedNumber) {
    attemptsCounter--;
    console.log("step " + attemptsCounter, guessedNumber);
    if (guessedNumber !== null && attemptsCounter > 0) {
      if (isNumber(guessedNumber)) {
        if (guessedNumber < referenceNumber) {
          console.log(attemptsCounter);
          checkNumber(
            prompt(
              "Загаданное число больше, осталось попыток " +
                attemptsCounter +
                "."
            )
          );
        } else if (guessedNumber > referenceNumber) {
          console.log(attemptsCounter);
          checkNumber(
            prompt(
              "Загаданное число меньше, осталось попыток " +
                attemptsCounter +
                "."
            )
          );
        } else {
          attemptsCounter = -1;
          checkNumber(guessedNumber);
        }
      } else {
        attemptsCounter++;
        checkNumber(prompt("Введи число!"));
      }
    } else {
      console.log(attemptsCounter, guessedNumber, referenceNumber);
      if (guessedNumber === null) {
       result = "Игра окончена!";
      } else {
        if (+guessedNumber !== referenceNumber) {
         result =  "Попытки закончились, хотите сыграть еще?";
        } else {
         result = "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?";
        }
      }
    }
    return result;
  };
}
}



startGame(10);
