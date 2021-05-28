/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("btn__reset");
  const keyboard = document.getElementById("qwerty");

  /**
   * Event Listeners
   *
   */

  // Starts game when start button is clicked
  startBtn.addEventListener("click", () => {
    game.startGame();
  });

  //handles onscreen keyboard interactivity
  keyboard.addEventListener("click", (evt) => {
    let key = evt.target;
    if (key.classList.contains("key")) {
      game.handleInteraction(key);
    }
  });
});
