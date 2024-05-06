let randomNumber = Math.ceil(Math.random() * 100);
let attempts = 0;

let output = document.getElementById("output");
let input = document.getElementById("user-input");
let attemptCount = document.getElementById("attemp-count");

const form = document.getElementById("form");


form.addEventListener('submit', (event) => {
  event.preventDefault();
  attempts++
  if (input.value == randomNumber) {
    output.innerHTML = `Congratulations! Your number was ${randomNumber}`;
    output.style.color = "green"
    attemptCount.innerHTML = `Attemps : ${attempts}`;
  } else if (input.value < randomNumber && input.value > 1) {
    output.innerHTML = "You guessed too low!";
    output.style.color = "red"
    // output.style.transition = "transform 3s ease"
  } else if (input.value > randomNumber && input.value < 100) {
    output.innerHTML = "You guessed too high!";
    output.style.color = "red"
  }

  output.classList.add('shake');

  setTimeout(() => {
    output.classList.remove('shake');
  }, 500);
});
