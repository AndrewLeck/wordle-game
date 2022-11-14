document.addEventListener("DOMContentLoaded", () =>{

    createSquares();

    let guessedWords = [[]]
    let availableSpace = 1;
    
    const keys = document.querySelectorAll(".keyboard-row button");
    
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");
            updatedGuessedWords(letter)
        };
    }

    function getCurrentWordArray(){
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1];
    }

    function updatedGuessedWords(letter) {
        const currentWordArray = getCurrentWordArray();

        if (currentWordArray && getCurrentWordArray.length < 5){
            currentWordArray.push(letter)

            const availableSpaceEl= document.getElementById(String(1))
            availableSpace = availableSpace + 1;
            availableSpaceEl.textContent = letter
        }

    }

    // This function creates the game board squares
    function createSquares() {
        const gameBoard = document.getElementById("board")
        
        //This forloop will created 30 squares on my index
        for ( let i = 0; i< 30; i++){
            let square = document.createElement("div")
            square.classList.add("square");
            square.setAttribute("id", i + 1);
            gameBoard.appendChild(square);
        }
    }


});
