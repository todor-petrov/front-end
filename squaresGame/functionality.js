const squares = document.querySelectorAll('.square');
let playerTurn = true;
let isComputersTurn = false;
let isComputerMoveInProgress = false;

function playerMove(index) {
    if (!playerTurn || isComputersTurn || isComputerMoveInProgress || squares[index].style.backgroundColor) return;

        squares[index].style.backgroundColor = 'red';

        playerTurn = false;

        setTimeout(() => {
            computerMove();
        }, 500);
    }

function computerMove() {
    isComputerMoveInProgress = true;
    isComputersTurn = true;

    let availableSquares = Array.from(squares).filter(square => square.style.backgroundColor === '');

    if (availableSquares.length === 0) {
        alert("Game Over!\nPlease, Refresh The Page For a New Game!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableSquares.length);
    const computerSquare = availableSquares[randomIndex];

    setTimeout(() => {
        computerSquare.style.backgroundColor = 'green';
        isComputerMoveInProgress = false;
        isComputersTurn = false;
        playerTurn = true;
    }, 500);
}