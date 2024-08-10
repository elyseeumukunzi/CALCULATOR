let displayValue = '';
let currentOperation = null;
let firstOperand = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        displayValue = '';
        shouldResetDisplay = false;
    }
    if (number === '.' && displayValue.includes('.')) return;
    displayValue += number;
    updateDisplay();
}

function chooseOperation(operation) {
    if (displayValue === '') return;
    if (currentOperation !== null) computeResult();
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    shouldResetDisplay = true;
}

function computeResult() {
    if (currentOperation === null || shouldResetDisplay) return;
    const secondOperand = parseFloat(displayValue);
    switch (currentOperation) {
        case '+':
            displayValue = firstOperand + secondOperand;
            break;
        case '-':
            displayValue = firstOperand - secondOperand;
            break;
        case '*':
            displayValue = firstOperand * secondOperand;
            break;
        case '/':
            displayValue = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentOperation = null;
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    currentOperation = null;
    firstOperand = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue || '0';
}