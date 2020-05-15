document.getElementById('r1c1').addEventListener('touchend', fillBoard);
document.getElementById('r1c2').addEventListener('touchend', fillBoard);
document.getElementById('r1c3').addEventListener('touchend', fillBoard);
document.getElementById('r2c1').addEventListener('touchend', fillBoard);
document.getElementById('r2c2').addEventListener('touchend', fillBoard);
document.getElementById('r2c3').addEventListener('touchend', fillBoard);
document.getElementById('r3c1').addEventListener('touchend', fillBoard);
document.getElementById('r3c2').addEventListener('touchend', fillBoard);
document.getElementById('r3c3').addEventListener('touchend', fillBoard);
document.getElementById('reset').addEventListener('click', reset);

let turnX = true;

function fillBoard(event) {
    event.target.innerHTML = getTurn();
    turnX = !turnX;
}

function getTurn() {
    return turnX ? 'X' : 'O';
}

const board = document.querySelector('.board')

function reset() {
    for (let i = 0; i < board.rows.length; i++) {
        let row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            row.cells[j].innerHTML = '';
        }
    }
}