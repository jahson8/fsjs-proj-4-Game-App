/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseArr = this.phrase.split("");
    const ul = document.createElement("ul");
    const phraseDiv = document.getElementById("phrase");

    for (let letter of phraseArr) {
      let li = document.createElement("li");
      li.textContent = letter;

      if (/^\s+|\s+$/g.test(letter)) {
        li.classList.add("space");
      } else {
        li.classList.add("hide", "letter");
      }

      ul.appendChild(li);
    }

    phraseDiv.innerHTML = "";
    phraseDiv.appendChild(ul);
  }

  checkLetter() {}

  showMatchedLetter() {}
}
