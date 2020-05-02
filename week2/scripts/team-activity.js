//Requirement 1
function displayText() {
    let userText = document.getElementById("user-text").value;
    document.getElementById("div1").innerHTML = "You entered: " + userText;
}

//Requirement 2
function sumRange() {
    let sumNumber = parseInt(document.getElementById("sum-range").value);
    let total = 0;
    for (let i = 1; i <= sumNumber; i++) {
        total += i;
    }
    document.getElementById("div2").innerHTML = "Total: " + total;
}

//Requirement 3
function addNumbers() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("div3").innerHTML = "Sum: " + sum;
}

//Stretch goals
function add() {
    let num1 = parseInt(document.getElementById("op-num1").value);
    let num2 = parseInt(document.getElementById("op-num2").value)
    let total = num1 + num2;
    document.getElementById("div4").innerHTML = "Total: " + total;
}

const subtract = function () {
    let num1 = parseInt(document.getElementById("op-num1").value);
    let num2 = parseInt(document.getElementById("op-num2").value)
    let total = num1 - num2;
    document.getElementById("div4").innerHTML = "Total: " + total;
}

const multiply = () => {
    let num1 = parseInt(document.getElementById("op-num1").value);
    let num2 = parseInt(document.getElementById("op-num2").value)
    let total = num1 * num2;
    document.getElementById("div4").innerHTML = "Total: " + total;
}

document.getElementById("button1").addEventListener("click", displayText);
document.getElementById("button2").addEventListener("click", sumRange);
document.getElementById("button3").addEventListener("click", addNumbers);
document.getElementById("button4").addEventListener("click", add);
document.getElementById("button5").addEventListener("click", subtract);
document.getElementById("button6").addEventListener("click", multiply);