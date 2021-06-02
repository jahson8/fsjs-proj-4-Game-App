/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */

  createPhrases() {
    const phrases = [
      new Phrase("Wise as an Owl"),
      new Phrase("Break out of your shell"),
      new Phrase("You must be fun at Parties"),
      new Phrase("That Train has left the Station"),
      new Phrase("Whatever will be will be"),
      new Phrase("The stars are aligned"),
      new Phrase("Another one in the books"),
      new Phrase("Good deeds sprinkle seeds"),
      new Phrase("as fast as lightning"),
      new Phrase("welcome back"),
    ];
    return phrases;
  }

  /**
   * Selects random phrase from phrase property
   * @return {object} An array of phrases that could be used in the game
   */
  getRandomPhrase() {
    const randInd = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randInd];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.getElementById("overlay").style.display = "none";
    const randomPhrase = this.getRandomPhrase();
    randomPhrase.addPhraseToDisplay();
    this.activePhrase = randomPhrase;
    this.resetGame();
  }

  /**
   *Event handler for keydown and click events
   * @param {eventObject} evt -   event handler's event object
   */
  handleInteraction(evt) {
    const type = evt.type;

    /**
     * Shows letter, updates UI keyboard and, shows end game overlay
     * @param {HTMLButtonElement} node - The current DOM node
     */
    const updateUI = (node) => {
      const letter = node.textContent;
      node.disabled = true;
      if (this.activePhrase.checkLetter(letter)) {
        node.classList.add("chosen");
        this.activePhrase.showMatchedLetter(letter);
        if (this.checkForWin()) {
          this.gameOver(true);
        }
      } else {
        this.removeLife();
        node.classList.add("wrong");
      }
    };

    // controls UI keyboard Interactivity
    if (type === "click") {
      if (evt.target.classList.contains("key")) updateUI(evt.target);
    }

    // controls user keyboard interactivity
    if (type === "keyup") {
      const keys = document.querySelectorAll(".key");
      keys.forEach((node) => {
        if (evt.key === node.textContent && !node.disabled) updateUI(node);
      });
    }
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    const letters = document.querySelectorAll(".letter");
    const shown = document.querySelectorAll(".show");
    return letters.length === shown.length;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    if (this.missed === 4) {
      this.gameOver(false);
    } else {
      this.missed++;
      const tries = document.querySelectorAll(".tries");
      tries[0].firstElementChild.src = "images/lostHeart.png";
      tries[0].className = "lost";
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    /**
     * Updates The overlay message
     * @param {string} result - updates the overlay class to either win or lose
     *  @param {string} message - updates the overlay H1 with end of game message
     */
    const overlayMessage = (result, message) => {
      const overlay = document.getElementById("overlay");
      const h1 = overlay.firstElementChild.nextElementSibling;
      overlay.className = result;
      h1.textContent = message;
      overlay.style.display = "";
    };

    if (gameWon) {
      overlayMessage("win", "You Won");
    } else {
      overlayMessage("lose", "Better Luck Next Time!");
    }
  }

  /**
   * enable onscreen keyboard
   * resets live hearts
   *
   */

  resetGame() {
    const lostHearts = document.querySelectorAll(".lost");
    const disabledBtns = document.querySelectorAll("button[disabled]");

    // resets live hearts
    lostHearts.forEach((heart) => {
      heart.className = "tries";
      heart.firstElementChild.src = "images/liveHeart.png";
    });

    // resets disabled buttons and removes the .chosen and .wrong classes
    disabledBtns.forEach((btn) => {
      btn.disabled = false;
      if (btn.classList.contains("chosen")) btn.classList.remove("chosen");
      if (btn.classList.contains("wrong")) btn.classList.remove("wrong");
    });
  }
}
