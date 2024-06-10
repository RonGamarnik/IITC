let num1 = '';
let num2 = '';
let operator = '';

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function setOperator(op) {
    operator = op;
    num1 = document.getElementById('display').value;
    clearDisplay();
}

function calculate() {
    num2 = document.getElementById('display').value;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            return;
    }
    document.getElementById('display').value = result;
    num1 = '';
    num2 = '';
    operator = '';
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
