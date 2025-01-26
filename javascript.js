let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');

//OPERATE FUNCTION
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null;
    }
}

function calculate() {
    if (currentOperator === null || shouldResetDisplay) return;
    if (currentOperator === '/' && display.textContent === '0') {
        alert("CANNOT DIVIDE BY 0");
        return;
    }
    secondOperand = display.textContent;
    display.textContent = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand));
    currentOperator = null;
}

function setOperator(operator) {
    if (currentOperator !== null) calculate();
    firstOperand = display.textContent;
    currentOperator = operator;
    shouldResetDisplay = true;
}

function appendNumber(number) {
    if (display.textContent === '0' || shouldResetDisplay) {
        resetDisplay();
    }
    display.textContent += number;
}

function appendDecimal() {
    if (shouldResetDisplay) resetDisplay();
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function resetDisplay() {
    display.textContent = '';
    shouldResetDisplay = false;
}

function clearDisplay() {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}