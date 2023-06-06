function add(a, b){
    if(+a != NaN && +b != NaN) return +a + +b;
}

function subtract(a, b){
    if(+a != NaN && +b != NaN) return +a - +b;
}

function multiply(a, b){
    if(+a != NaN && +b != NaN) return +a * +b;
}

function divide(a, b){
    if(+a != NaN && +b != NaN) return +a / +b;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";

function clearField(){
    firstNumber = "";
    secondNumber = "";
    operator = "";
    updateField("Enter the equation")
}

function updateField(str){
    const field = document.querySelector(".display");
    field.textContent = str;
}

function operate(first, second, op){
    let result = "";
    switch(op){
        case "+":
            result = add(first, second);
            break;
        case "-":
            result = subtract(first, second);
            break;
        case "*":
            result = multiply(first, second);
            break;
        case "/":
            result = divide(first, second);
            break;
    }
    updateField(result);
}

function appendEquation(event){
    if(Number.isInteger(+event.target.textContent)
        && operator == ""){
        firstNumber += event.target.textContent;
    } else if (Number.isInteger(+event.target.textContent)) {
        secondNumber += event.target.textContent;
    } else {
        operator = event.target.textContent;
    }
    let equation = firstNumber + operator + secondNumber;
    updateField(equation)
}

numbers = document.querySelectorAll(".number");

numbers.forEach(number => number.addEventListener('click', appendEquation))

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearField);

const enterButton = document.querySelector('button#enter');
enterButton.addEventListener('click', () => operate(firstNumber, secondNumber, operator))

clearField();