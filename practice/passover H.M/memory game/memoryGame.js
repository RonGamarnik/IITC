// Global variables
let board = [];
let selectedCard = null;
let counterOfMatches = 0;
let winMeter;
let roundCounter = 0;
let playerName = prompt("Please enter your name!");
let startTime = performance.now();

// Function to create the game board
function createBoard(totalCards) {
    if (isNaN(totalCards) || totalCards <= 0 || totalCards % 2 !== 0 || totalCards > 20) {
        alert("Please enter a valid positive even number for the total number of pairs (up to 20).");
        return;
    }

    const totalPairs = totalCards / 2;
    winMeter = totalPairs;
    const numbers = [];

    // Generate unique numbers for pairs
    for (let i = 0; i < totalPairs; i++) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 10);
        } while (numbers.includes(randomNumber));

        numbers.push(randomNumber, randomNumber);
    }


    const shuffledNumbers = shuffleArray(numbers);

    // Split the shuffled numbers into pairs to populate the board
    board = [];
    for (let i = 0; i < totalPairs; i++) {
        board.push(shuffledNumbers.slice(i * 2, i * 2 + 2));
    }

    return board;
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to add card elements to HTML
function addDivsToHtml(totalPairs) {
    const boardContainer = document.querySelector('.board');
    boardContainer.innerHTML = '';

    for (let i = 0; i < totalPairs; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = 'Right guess';

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        const img = document.createElement('img');
        img.src = 'images/card-back.jpg'; 
        img.alt = 'Card Back';
        cardBack.appendChild(img);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        // Attach click event listener to each card
        card.addEventListener('click', cardClickHandler);

        boardContainer.appendChild(card);
    }
}

// Event listener function for card click
function cardClickHandler() {
    const card = this;

    if (!card.classList.contains('flipped')) {
        flipCard(card); 

        setTimeout(() => {
            checkForCorrectMatch();
        }, 500); 
    }
}

// Function to flip a card
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Function to check for a correct match
function checkForCorrectMatch() {
    const flippedCards = document.querySelectorAll('.card.flipped');

    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        const firstNumber = parseInt(firstCard.querySelector('.card-back').getAttribute('value'));
        const secondNumber = parseInt(secondCard.querySelector('.card-back').getAttribute('value'));

        if (firstNumber === secondNumber) {
            
            firstCard.classList.add('correct');
            secondCard.classList.add('correct');
            counterOfMatches++;
            resetFlippedCards();

            if (counterOfMatches === winMeter) {
                setTimeout(() => {
                    roundCounter++;
                    alert("Congratulations, you have won!");
                    playAgain();
                }, 500); // Adjust delay as needed
            } else {
                setTimeout(() => {
                    attachCardListeners();
                }, 500); // Adjust delay as needed
            }
        } else {
            // No match, flip back the cards after a delay
            setTimeout(() => {
                resetFlippedCards();
            }, 1000); // Adjust delay as needed
        }
    }
}

// Function to reset flipped cards
function resetFlippedCards() {
    const flippedCards = document.querySelectorAll('.card.flipped');

    flippedCards.forEach(card => {
        flipCard(card); // Flip back the card
    });

    // Reattach event listeners to all cards after a delay
    setTimeout(() => {
        attachCardListeners();
    }, 500); // Adjust delay as needed
}

// Function to attach event listeners to all cards
function attachCardListeners() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (!card.classList.contains('correct')) {
            card.addEventListener('click', cardClickHandler);
        }
    });
}

// Function to remove event listeners from specific cards
function removeCardListeners(cards) {
    cards.forEach(card => {
        card.removeEventListener('click', cardClickHandler);
    });
}

// Function to handle play again option
function playAgain() {
    let playAgainResponse = prompt("Would you like to play again?");

    if (playAgainResponse && (playAgainResponse.toLowerCase() === 'yes' || playAgainResponse.toLowerCase() === 'y')) {
        resetGame();
    } else {
        let endTime = performance.now();
        let timeElapsedSeconds = (endTime - startTime) / 1000;
        alert(`Thank you ${playerName} for playing. You have played ${roundCounter} rounds and it took ${timeElapsedSeconds.toFixed(2)} seconds.`);
    }
}

// Function to reset the game
function resetGame() {
    board = [];
    selectedCard = null;
    counterOfMatches = 0;
    winMeter = 0;

    gameSetup();
}

// Function to set up the game
function gameSetup() {
    let totalCards;

    while (isNaN(totalCards) || totalCards % 2 !== 0 || totalCards <= 0) {
        totalCards = parseInt(prompt('Please enter a valid positive even number for the total number of cards:'));
    }

    addDivsToHtml(totalCards);
    createBoard(totalCards);
    printBoard(board);
    attachCardListeners(); // Attach event listeners after setting up the game
}

// Function to print the board
function printBoard(board) {
    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cardIndex = i * 2 + j;
            const card = cards[cardIndex];

            if (card) {
                const number = board[i][j];
                changeImage(card.querySelector('.card-back'), number);
            }
        }
    }
}

// Function to change the image on the card back
function changeImage(cardBack, number) {
    let imgSrc, altText;

    switch (number) {
        case 0:
            imgSrc = 'images/picture0.jpg';
            altText = 'Eiffel Tower, Paris';
            break;
        case 1:
            imgSrc = 'images/picture1.webp';
            altText = 'Leaning Tower of Pisa, Italy';
            break;
        case 2:
            imgSrc = 'images/picture2.jpg';
            altText = 'Statue of Liberty, New York';
            break;
        case 3:
            imgSrc = 'images/picture3.jpg';
            altText = 'Big Ben, London';
            break;
        case 4:
            imgSrc = 'images/picture4.jpg';
            altText = 'Colosseum, Rome';
            break;
        case 5:
            imgSrc = 'images/picture5.jpg';
            altText = 'Dome of the Rock, Jerusalem';
            break;
        case 6:
            imgSrc = 'images/picture6.webp';
            altText = 'Parthenon, Athens';
            break;
        case 7:
            imgSrc = 'images/picture7.webp';
            altText = 'Saint Basil\'s Cathedral, Moscow';
            break;
        case 8:
            imgSrc = 'images/picture8.jpeg';
            altText = 'Tokyo Tower, Tokyo';
            break;
        case 9:
            imgSrc = 'images/picture9.jpg';
            altText = 'Burj Khalifa, Dubai';
            break;
        default:
            imgSrc = 'images/card-back.jpg'; // Default back image
            altText = 'Card Back';
            break;
    }

    const imgElement = cardBack.querySelector('img');
    imgElement.src = imgSrc;
    imgElement.alt = altText;
    cardBack.setAttribute('value', number);
}

// Initialize the game setup when the page loads
document.addEventListener('DOMContentLoaded', gameSetup);
