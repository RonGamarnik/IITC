let template = [], size = prompt("Please choose the size o the board.")
for (let row = 0; row < size; row++) {
    template[row] = [];
    for (let j = 0; j < size; j++) {
        template[row][j] = " |#| ";
    }
}
stats = [0,0,0,0]
console.log(template)
let win = false;
pl1WinsNum = stats[0];
pl2WinsNum = stats[1];
drawsNum = stats[2];


function winCheck(name, mark) {
    let counter = 0;
    for (let row = 0; row < size; row++) {
        let rowMatch = true;
        for (let i = 1; i < size; i++) {
            if (template[row][0] !== template[row][i]) {
                rowMatch = false;
                break;
            }
        }
        if (rowMatch && template[row][0] !== " |#| ") {
            counter++;
        }
    }
    for (let column = 0; column < size; column++) {
        let columnMatch = true;
        for (let i = 1; i < size; i++) {
            if (template[0][column] !== template[i][column]) {
                columnMatch = false;
                break;
            }
        }
        if (columnMatch && template[0][column] !== " |#| ") {
            counter++;
        }
    }
    let diagonalMatch1 = true;
    for (let diagonal = 1; diagonal < size; diagonal++) {
        if (template[0][0] !== template[diagonal][diagonal]) {
            diagonalMatch1 = false;
            break;
        }
    }
    if (diagonalMatch1 && template[0][0] !== " |#| ") {
        counter++;
    }

    let diagonalMatch2 = true;
    for (let row = 0, column = size - 1; row < size && column >= 0; row++, column--) {
        if (template[0][size - 1] !== template[row][column]) {
            diagonalMatch2 = false;
            break;
        }
    }
    if (diagonalMatch2 && template[0][size - 1] !== " |#| ") {
        counter++;
    }

    if (counter > 0) {
        console.log(name + " has won!");
        win = true;
        if (name === "pl1") {
            stats[0]+=1;
        }
        else if (name === "pl2") {
            stats[1] +=1;
        
        }
    }
}
    function isDraw() {
        for (let row = 0; row < size; row++) {
            for (let column = 0; column < size; column++) {
                if (template[row][column] === " |#| ") {
                    return false;
                }
            }
        }
        stats[2] +=1;
        return true;
    }

    let pl1 = prompt("Player 'x' please enter your name.");
    function pl1Turn() {
        let row = prompt(pl1 + " Please enter the row you want to place your piece.");
        let column = prompt(pl1 + " Please enter the column you want to place your piece.");
    
    
        if (row >= 0 && row < size && column >= 0 && column < size) {
            if (template[row][column] === " |#| ") {
                template[row][column] = "X";
                console.log(template);
            } else {
                console.log("This space is already taken.");
                pl1Turn();
            }
        } else {
            console.log("Invalid input. Row and column must be within the board's bounds.");
            pl1Turn();
        }
    }

    let pl2 = prompt("Player 'O' please enter your name.");
    function pl2Turn() {
        let row = prompt(pl2 + " Please enter the row you want to place your piece.");
        let column = prompt(pl2 + " Please enter the column you want to place your piece.");

        if (row >= 0 && row < size && column >= 0 && column < size) {
            if (template[row][column] === " |#| ") {
                template[row][column] = "O";
                console.log(template);
            } else {
                console.log("This space is already taken.");
                pl2Turn();
            }
        } else {
            console.log("Invalid input. Row and column must be within the board's bounds.");
            pl2Turn();
        }
    }

function gamePlay() {
        stats[3] += 1;
        while (win === false && !isDraw()) {
            pl1Turn();
            winCheck(pl1, "X"); 
            if (win) break;
            pl2Turn();
            winCheck(pl2, "O"); 
        }
        console.log("Game Over");
        let again = confirm("Would you like to play again? (Press 'OK' for Yes, 'Cancel' for No)");
        if (again == true) {
            size = prompt("Please choose the size of the board.");
            template = [];
            for (let row = 0; row < size; row++) {
                template[row] = [];
                for (let j = 0; j < size; j++) {
                    template[row][j] = " |#| ";
                }
            }
            win = false; 
            gamePlay();
        } else {
            console.log("Thanks for playing!");
            console.log("Stats:");
            console.log("Player 1 Wins:", stats[0]);
            console.log("Player 2 Wins:", stats[1]);
            console.log("Draws:", stats[2]);
            console.log("Total Games Played:", stats[3]);
        }
    }


gamePlay();
