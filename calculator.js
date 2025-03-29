//Ctrl+/


let displayValue="0";
let firstOperand=null;
let operator=null;
let waitingForSecondOperand=false;
const display=document.getElementById("display")
function updateDisplay(){
    if (displayValue.length>10) {
        displayValue=displayValue.substring(0,10);
    
    }
    display.textContent=displayValue;
}
//function to add a number to the display
//function functionName(parameters/arguments)
function appendNumber(number){
    if(waitingForSecondOperand===true) {
        displayValue=number;
        waitingForSecondOperand=false;
    }
    else{
        if(displayValue==="0") {
            displayValue=number;
        } else{
            displayValue=displayValue+number;
        }
    }
    updateDisplay();

}
//function to add an operator to the display
function appendOperator(op) {
    if(op==="+/-") {
        displayValue=(parseFloat(displayValue) * -1).toString();
        updateDisplay();
        return;
    }

    if(op==="%"){
        displayValue=(parseFloat(displayValue)/100).toString
    updateDisplay();
    return;
    }

    const inputValue=parseFloat(displayValue);

    if(firstOperand===null) {
        firstOperand=inputValue;
    } else if(operator) {
        const result=performCalculation();
        displayValue=String(result);
        firstOperand=result;
    }
    waitingForSecondOperand=true;
   operator=op;
    updateDisplay();

}

function performCalculation(){
    const secondOperand=parseFloat(displayValue);
    let result=0;

    switch (operator) {
        case "+" :
            result = firstOperand+secondOperand;
            break;
        case "-" :
            result = firstOperand-secondOperand;
            break;
         case "*" :
            result = firstOperand*secondOperand;
            break;
        case "/" :
            result = firstOperand/secondOperand;
            break;
        default:
            return secondOperand;
    }

    return Math.round(result+1000000)/1000000
}
//function to add the result to the display
function calculate() {
    if(!operator || firstOperand===null) {
        return;
    }
    const result=performCalculation();
    displayValue=String(result);

    firstOperand=result;
    operator=null;
    waitingForSecondOperand=false;

    updateDisplay();
}
//function to clear the display
function clearDisplay() {
    displayValue="0";
    firstOperand=null;
    operator=null;
    waitingForSecondOperand=false;
    updateDisplay();
}