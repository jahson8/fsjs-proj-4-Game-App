/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("btn__reset");
  const keyboard = document.getElementById("qwerty");
  let game;

  /**
   * Event Listeners
   *
   */

  // Starts game when start button is clicked
  startBtn.addEventListener("click", () => {
    game = new Game();
    game.startGame();
  });

  //add UI keyboard interactivity
  keyboard.addEventListener("click", (evt) => {
    game.handleInteraction(evt);
  });

  // add user keyboard interactivity
  document.addEventListener("keyup", (evt) => {
    game.handleInteraction(evt);
  });
});
