function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return +a - +b;
}

function multiply(a, b){
    return +a * +b;
}

function divide(a, b){
    return +a / +b;
}

let currentNumber = "";
let operator = "";
let result = "";

function clearField(){
    currentNumber = "";
    result = "";
    operator = "";
    updateField("Enter the equation");
}

function updateField(str){
    const field = document.querySelector(".display");
    field.textContent = str;
}

function operate(){
    if (result == ""){
        updateField(currentNumber);
        return currentNumber;
    }
    switch(operator){
        case "+":
            return add(result, currentNumber);
        case "-":
            return subtract(result, currentNumber);
        case "*":
            return multiply(result, currentNumber);
        case "/":
            return divide(result, currentNumber);
    }    
}

function appendNumber(event){
    const input = event.target.textContent;
    currentNumber += input;
    updateField(currentNumber)
}

function changeOperator(event){
    if (operator == ""){
        operator = event.target.textContent;
        result = operate();
    } else{
        result = operate();
        operator = event.target.textContent;
    }
    currentNumber = "";
    updateField(result);
}

function enterEquation(){
    updateField(operate())
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener('click', appendNumber))

const operators = document.querySelectorAll('.operator')
operators.forEach(operator => operator.addEventListener('click', changeOperator))

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearField);

const enterButton = document.querySelector('button#enter');
enterButton.addEventListener('click', enterEquation)

clearField();