document.addEventListener("DOMContentLoaded", () => {
  createSquares();

  let guessedWords = [[]];
  let availableSpace = 1;
  let word = "dairy";
  let guessedWordCount = 0;

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

  //This function will provide the proper color for the tile when submitted
  function getTileColor(letter, index) {
    const isCorrectLetter = word.includes(letter)

    if(!isCorrectLetter){
        return "rgb(58, 58, 60)";
    }

    const letterInThatPosition = word.charAt(index)
    const isCorrectposition = letter = letterInThatPosition

    if(isCorrectposition){
        return "rgb(83, 141, 78)";
    }

    return "rgb(181, 159, 59)";
  }

  //This function will make sure that the worred guess is 5 letters
  //Change the aleart when finished to sweet alert to add your own twist and style to it.
  function handleSubmitWord() {
    const currentWordArray = getCurrentWordArray();
    if (currentWordArray.length !== 5) {
      window.alert("Word must be 5 letters");
    }

    const currentWord = currentWordArray.join("");

    const firstLetterId = guessedWordCount * 5 + 1;
    const interval = 200;

    currentWordArray.forEach((letter, index) => {
      setTimeout(() => {
        const tileColor = getTileColor(letter, index);

        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);
        letterEl.classList.add("animate__flipInX");
        letterEl.style = `background-color:${tileColor}; border-color:${tileColor}`;
      }, interval * index);
    });
    guessedWordCount += 1;

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
