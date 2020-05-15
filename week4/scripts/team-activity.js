const board = document.querySelector('.board');
let turnX = true;

function fillBoard(event) {
    event.target.innerHTML = getTurn();
    turnX = !turnX;
}

function getTurn() {
    return turnX ? 'X' : 'O';
}

function reset() {
    for (let i = 0; i < board.rows.length; i++) {
        let row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            row.cells[j].innerHTML = '';
        }
    }
}

board.addEventListener('touchend', fillBoard);
document.getElementById('reset').addEventListener('click', reset);