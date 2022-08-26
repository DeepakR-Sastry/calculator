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
function evaluate(id){
    if(start){
        container.textContent = null;
        start=false;
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
        operand2 = container.textContent;
        operand1 = parseInt(operand1), operand2 = parseInt(operand2);
        let x = operate(operand1, operand2, operator);
        container.textContent = x;
    }
    else{
        container.textContent += id;
    }
    if(id == "AC"){
        container.textContent = 0;
        start = true;
    }
    
}

const buttons = document.querySelectorAll('div div')
buttons.forEach((button) => {
    button.addEventListener('click', function(){
        evaluate(button.id);
    });
});