let n = 46;

const getNumber = function () {
  return prompt("Guess a number from 1 to 100");
};

const guessNumber = function () {
  number = getNumber();
  console.log(number);

  if (number === null) {
    alert("Game over");
    return;
  }
  if (isNaN(number) || !number.trim()) {
    alert("Not a number");
    number = guessNumber();
  }

  if (+number === n) {
    alert("Congrats!");
  } else if (+number > n) {
    alert("Too big");
    number = guessNumber();
  } else if (+number < n) {
    alert("Too small");
    number = guessNumber();
  }
};

guessNumber();
