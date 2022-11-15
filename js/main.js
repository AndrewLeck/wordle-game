document.addEventListener("DOMContentLoaded", () => {
  createSquares();

  let guessedWords = [[]];
  let availableSpace = 1;
  let word = "dairy";

  const keys = document.querySelectorAll(".keyboard-row button");

  function getCurrentWordArray() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
  }

  function updatedGuessedWords(letter) {
    const currentWordArray = getCurrentWordArray();

    if (currentWordArray && getCurrentWordArray.length < 5) {
      currentWordArray.push(letter);

      const availableSpaceEl = document.getElementById(String(availableSpace));
      availableSpace = availableSpace + 1;
      availableSpaceEl.textContent = letter;
    }
  }

  //This function will make sure that the worred guess is 5 letters
  //Change the aleart when finished to sweet alert to add your own twist and style to it.
  function handleSubmitWord() {
    const currentWordArray = getCurrentWordArray();
    if (currentWordArray.length !== 5) {
      window.alert("Word must be 5 letters");
    }

    const currentWord = currentWordArray.join("");

    if (currentWord === word) {
      window.alert("Congratulations!");
    }
    if (guessedWords.length === 6) {
      window.alert(`Game over, the word is ${word}`);
    }
    guessedWords.push([]);
  }

  // This function creates the game board squares
  function createSquares() {
    const gameBoard = document.getElementById("board");

    //This forloop will created 30 squares on my index
    for (let i = 0; i < 30; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate_animated");
      square.setAttribute("id", i + 1);
      gameBoard.appendChild(square);
    }
  }

  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key");

      if (letter === "enter") {
        handleSubmitWord();
        return;
      }

      updatedGuessedWords(letter);
    };
  }
});
