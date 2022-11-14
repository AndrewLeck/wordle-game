document.addEventListener("DOMContentLoaded", () =>{

    createSquares();

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
