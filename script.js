/**
 * High/low number-guessing game logic for the static HighLowGame page.
 * Picks a secret target in 1..100, then updates the DOM via jQuery when
 * checkValue() runs (button click from index.html). Assumes jQuery and the
 * `#result`, `.form-control`, `.previousGuesses`, and `#playerFeedback` nodes exist.
 */
let targetNum = Math.floor(Math.random() * 100 + 1);
// Debug: reveals the secret when DevTools is open (coursework leftover).
console.log(targetNum);

/** @type {number[]} Guesses submitted this round, in order. */
let guesses = new Array();

/**
 * Reads the current guess from `.form-control`, records it, and shows
 * high / low / win / invalid feedback in `#result`.
 * On a win, replaces `#playerFeedback` with the attempt count and a refresh prompt.
 * @returns {void}
 * @example
 * // After the user enters 50 and clicks Guess:
 * checkValue(); // #result becomes "Too high!", "Too low!", or "You got it!"
 */
function checkValue() {
  let result = parseInt($(".form-control").val());

  guesses.push(result);
  // Keep prior guesses visible so players can compare attempts without memory load.
  $(".previousGuesses").append(`<li class="fs-2"> ${result} </li>`);

  if (result > targetNum) {
    $("#result").css("color", "crimson");
    $("#result").text("Too high!");
  } else if (result < targetNum) {
    $("#result").css("color", "darkgoldenrod");
    $("#result").text("Too low!");
  } else if (result == targetNum) {
    $("#result").css("color", "green");
    $("#result").text("You got it!");

    $("#playerFeedback").html(
      `<h3>Nice job!<br/><br/>You guessed <u class="fw-bold text-primary">${guesses.length}</u>time(s) before you won!<br/><br/>Refresh the page to play again.<h3>`,
    );
  } else {
    $("#result").css("color", "brown");
    $("#result").text("Invalid entry. Please enter an actual number.");
  }
  console.log(guesses);
}
