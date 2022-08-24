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

function askNumInput(){
    while(true){
        let x = prompt("Enter number:");
        x = parseInt(x);
        let isNotNum = isNaN(x);
        if (isNotNum){
            alert("Not a number! Enter a number");
        }
        else{
            return x;
        }

    }
}

function askOpInput(){
    let operations = ["+", "-", "*", "/"];
    while(true){
        op = prompt("Enter operator:");
        if(operations.includes(op)){
            return op;
        }
        else{
            alert("Not a valid operator!");
        }
    }
    

}

function operate(a,b,operator){
    console.log(operator);
    if(operator == "+"){
        return add(a,b);
    }
    if(operator == "-"){
        return subtract(a-b);
    }
    if(operator == "*"){
        return multiply(a,b);
    }
    if(operator=="/"){
        return divide(a,b);
    }
}


// let a = askNumInput();
// let b = askNumInput();
// let operator = askOpInput();


// alert(operate(a,b,operator));