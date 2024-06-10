let computerBoard = [];
let playerBoard = [];
let history = [];
let roundCounter = 0;
let win = false;
let startTime = 0;

function generateComputerBoard() {
    while (computerBoard.length < 4) {
        let randomNumber = Math.floor(Math.random() * 10);
        startTime = Date.now();
        if (!computerBoard.includes(randomNumber)) {
            computerBoard.push(randomNumber);
        }
    }
}

function appendToDisplay(value) {
    switch (roundCounter) {
        case 0:
            document.getElementById('display').value += value;
            playerBoard.push(value);
            roundCounter++;
            break;
        case 1:
            if (playerBoard.includes(value)) { alert("You have already entered this number"); roundCounter--; }
            else {
                document.getElementById('display2').value += value;
                playerBoard.push(value);
            }
            roundCounter++;
            break;
        case 2:
            if (playerBoard.includes(value)) { alert("You have already entered this number"); roundCounter--; }
            else {
                document.getElementById('display3').value += value;
                playerBoard.push(value);
            }
            roundCounter++;
            break;
        case 3:
            if (playerBoard.includes(value)) { alert("You have already entered this number"); roundCounter--; }
            else {
                document.getElementById('display4').value += value;
                playerBoard.push(value);
            }
            roundCounter++;
            break;
    }
}

function bullCheck() {
    let counter = 0;
    for (let i = 0; i < 4; i++) {
        if (computerBoard[i] === playerBoard[i]) {
            counter++;
            if (counter === 4) {
                win = true;
            }
        }
    }
    document.querySelector('.bull').innerHTML = "Bull: " + counter;
}

function cowCheck() {
    let counter = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (computerBoard[i] == playerBoard[j]) {
                counter++;
            }
        }
    }
    document.querySelector('.cow').innerHTML = "Cow: " + counter;
}

function checkBoard() {
    bullCheck();
    cowCheck();
    if (win === true) {
        let timeEnd = Date.now();
        let timeTaken = (timeEnd - startTime) / 1000;
        alert("Congrats! You won! The game took " + timeTaken.toFixed(2) + " seconds");
        playAgain();
    } else if (win === false) {
        history.push(playerBoard);
        playerBoard = [];
        roundCounter = 0;
        document.getElementById('display').value = "";
        document.getElementById('display2').value = "";
        document.getElementById('display3').value = "";
        document.getElementById('display4').value = "";
        printHistory();
    }
}

function printHistory() {
    let historyTable = "";
    for (let i = 0; i < history.length; i++) {
        let guess = history[i];
        let row = "<tr>";
        for (let j = 0; j < guess.length; j++) {
            let cellContent = guess[j];
            let cellColor = "";
            if (cellContent === computerBoard[j]) {
                cellColor = "green";
            } else if (computerBoard.includes(cellContent)) {
                cellColor = "blue";
            } else {
                cellColor = "red";
            }
            row += "<td style='color: " + cellColor + "'>" + cellContent + "</td>";
        }
        row += "</tr>";
        historyTable += row;
    }
    document.getElementById('historyBody').innerHTML = historyTable;
}

function playAgain() {
    let playAgainResponse = confirm("Would you like to play again?");
    if (playAgainResponse) {
        computerBoard = [];
        generateComputerBoard();
        playerBoard = [];
        roundCounter = 0;
        win = false;
        startTime = Date.now();
        document.getElementById('display').value = "";
        document.getElementById('display2').value = "";
        document.getElementById('display3').value = "";
        document.getElementById('display4').value = "";
        document.querySelector('.bull').innerHTML = "";
        document.querySelector('.cow').innerHTML = "";
        history = [];
    } else {
        alert("Thank you for playing!");
    }
}