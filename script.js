let randomNumber = Math.ceil(Math.random() * 100);

let output = document.getElementById("output");

let btn = document.getElementById("button1");

// console.log(btn);
// console.log(randomNumber);
// console.log(output);

btn.addEventListener('click', () => {
  let input = document.getElementById("user-input");
  if (input.value == randomNumber) {
    output.innerHTML = `Congratulations! Your number was ${randomNumber}`;
    output.style.color = "green"
  } else if (input.value < randomNumber && input.value > 1) {
    output.innerHTML = "You guessed too low!";
    output.style.color = "red"
  } else if (input.value > randomNumber && input.value < 100) {
    output.innerHTML = "You guessed too high!";
    output.style.color = "red"
  }
});
