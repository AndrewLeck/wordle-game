document.addEventListener("DOMContentLoaded", () =>{

    createSquares();

    const keys = document.querySelectorAll(".keyboard-row button");
    
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const key = target.getAttribute("data-key");
            console.log('The key is', key)
        };
        
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
