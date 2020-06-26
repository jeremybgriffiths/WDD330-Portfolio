import QuakesController from './QuakesController.js';

const quakesController = new QuakesController('#quakeList');

let button = document.getElementById('submit-radius');
button.addEventListener('click', () => {
    setRadius();
})

function setRadius() {
    let radius = document.getElementById('radius').value;
    quakesController.init(radius);
}