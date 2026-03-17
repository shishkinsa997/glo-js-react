let guess = Math.floor(Math.random() * 100);
let attempts = 10;

const getNumber = function () {
  return prompt("Guess a number from 1 to 100");
};

const guessNumber = function () {
  if (attempts <= 0) {
    if (confirm("Attempts are over, want to play again?")) {
      attempts = 10
      guessNumber();
    }
    return;
  }
  number = getNumber();
  console.log(number);

  if (number === null) {
    alert("Game over");
    return;
  }
  if (isNaN(number) || !number.trim()) {
    alert("Not a number");
    return guessNumber();
  }

  if (+number === guess) {
    if (confirm("Congrsts!. Want to play again?")) {
      attempts = 10
      guessNumber();
    }
    return;
  }

  attempts--;

  if (+number > guess) {
    alert("Too big. Attempts left: " + attempts);
  } else if (+number < guess) {
    alert("Too small. Attempts left: " + attempts);
  }

  guessNumber();
};

guessNumber();
