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
  }

  handleInteraction(evt) {
    let letter = evt.target.textContent;
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
  removeLife() {}

  gameOver() {}
}
