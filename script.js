function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function mod(a,b){
    return a % b;
}

function operate(a,b,operator){
    console.log(operator);
    if(operator == "+"){
        return add(a,b);
    }
    if(operator == "-"){
        return subtract(a,b);
    }
    if(operator == "*"){
        return multiply(a,b);
    }
    if(operator=="/"){
        if(b == 0){
            alert("Cannot divide by zero!");
            return null;
        }
        return divide(a,b);
    }
    if(operator=="%"){
        return mod(a,b);
    }
}

let start = true;
const operators = ["+", "-", "/", "*", "%"];
const container = document.querySelector("#display");

let operand1 = 0, operand2 = 0, operator = null;
let hasOperator = false;

const period = document.querySelector("#\\.");
function evaluate(id){
    if(start){
        container.textContent = null;
        start=false;
    }

    if(id == "." && container.textContent.includes(".")){
        return null;
    }

    if(id == "DEL" && container.textContent.length != 1){
        container.textContent = container.textContent.slice(0, -1);
        return null;
    }
    if(id == "DEL" && container.textContent.length == 1){
        container.textContent = 0;
        return null;
    }

    if(hasOperator){
        container.textContent = null;
        hasOperator = false;
    }
    
    if(operators.includes(id)){
        operand1 = container.textContent;
        operator = id;
        container.textContent = null;
        hasOperator = true;
    }
    if(id == "="){
        if(operator == null){
            return null;
        }
        operand2 = container.textContent;
        operand1 = parseFloat(operand1), operand2 = parseFloat(operand2);
        let x = operate(operand1, operand2, operator);
        container.textContent = x;
        operand1 = x;
    }
    else{
        container.textContent += id;
    }
    if(id == "AC"){
        container.textContent = 0;
        start = true;
    }

    if(container.textContent.includes(".")){
        period.style.backgroundColor = "black";
    }
    else{
        period.style.backgroundColor = "#1F6357";
    }
    
}

const buttons = document.querySelectorAll('div div')
buttons.forEach((button) => {
    button.addEventListener('click', function(){
        evaluate(button.id);
    });
});