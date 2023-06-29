//import { add, subtract, multiply, divide } from './operator_functions.js';

let displayValue = '0';

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  }else {
    displayValue += value; 
  }
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0'
  document.getElementById('display').innerText = displayValue;
}

function operate(operator) { 
  displayValue += operator;
  document.getElementById('display').innerText = displayValue;
}


function calculate() {
  try {
    const result = math.evaluate(displayValue);
    displayValue = result.toString();
    document.getElementById('display').innerText = displayValue;
  }catch (error) {
    displayValue = 'Error';
    document.getElementById('display').innerText = displayValue;
  }
}




const add = function(a,b) {

    return a+b;
};

const subtract = function(a, b) {
  return a - b;
};



const multiply = (a,b) => {
  return a*b;
}

const divide = function() {
	return a/b;
};

