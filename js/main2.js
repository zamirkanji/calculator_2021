//**************************************** SELECTORS ************************************************
const displayText = document.querySelector('.display-text');
const displayTextContainer = document.querySelector('.current_num_container');

const allNumberBtns = document.querySelectorAll('.num-btn');
const clearAllBtn = document.querySelector('.clear-all');
const clearEntryBtn = document.querySelector('.clear-entry');

const divideBtn = document.querySelector('.divide-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const subtractBtn = document.querySelector('.subtract-btn');
const additionBtn = document.querySelector('.addition-btn');
const equalsBtn = document.querySelector('.equals-btn');

const decimalBtn = document.querySelector('.btn-decimal');

//********************************************** VARIABLES **********************************************
const log = console.log;

const divideOperator = ' / ';
const multiplyOperator = ' * ';
const subtractOperator = ' - ';
const additionOperator = ' + ';

let displayInput = 0;
let displayCurrent = 0;
let numArr = [];

let stringNums = '';

let addBtnClicked = false;
let subtractBtnClicked = false;
let multiplyBtnClicked = false;
let divideBtnClicked = false;
let decimalBtnClicked = false;

//************************************ OPERAND BTN EVENTS/DISPLAY NUMBERS *************************************** */

const displayNum = (e) => {
    clearEntry();
    allNumberBtns.forEach(btn =>  {
        btn.addEventListener('click', (e) => {
            let val = e.target.value;
            displayText.textContent = val;
            displayText.textContent = stringNums +=  val;       
        })
    })
    return stringNums;
}
//************************************* STORE NUMBER, OPERATOR ****************************** */
    
function storeOperator_Num (number, operator) {
    displayText.textContent = number + operator;
    stringNums = '';
    // displayText.textContent = displayCurrent;
}

//************************************* OPERATION FUNCTIONS ************************************ */

const divideNums = (a, b) => {
    log(a, b);
    // let answer = Math.round((a / b));
    let answer = a / b;
    displayText.textContent = answer;
    numArr = [];
    stringNums = answer;
    return answer; 
}
const multiplyNums = (a, b) => {
    log(a, b);
    let answer = a * b;
    displayText.textContent = answer;
    numArr = [];
    stringNums = answer;
    return answer; 
}
const subtractNums = (a, b) => {
    log(a, b);
    let answer = a - b;
    displayText.textContent = answer;
    numArr = [];
    stringNums = answer;
    return answer; 
}
const addNums = (a, b) => {
    log(a, b);
    let answer = +a + +b;
    displayText.textContent = answer;
    numArr = [];
    stringNums = answer;
    return answer; 
}

//**********************************OPERATION ************************************** */

function operation (a, b) {
    if (divideBtnClicked == true) {
        divideBtn.classList.remove('highlight-operator');
        divideNums(a, b);
    } else if (multiplyBtnClicked == true) {
        multiplyBtn.classList.remove('highlight-operator');
        multiplyNums(a, b);
    } else if (subtractBtnClicked == true) {
        subtractBtn.classList.remove('highlight-operator');
        subtractNums(a, b);
    } else if (addBtnClicked == true) {
        additionBtn.classList.remove('highlight-operator');
        addNums(a, b);
    } else {
        return;
    }
    
}

// ************************* CLEAR ALL, CLEAR ENTRY **************************************

const clearAll = () => {
    let clearAllConfirm = window.confirm('Are you sure you want to Clear Everything?');
    if (clearAllConfirm) {location.reload()};
}

const clearEntry = () => {
    clearEntryBtn.addEventListener('click', () => {
        stringNums = stringNums.substring(0, stringNums.length - 1);
        displayText.textContent = stringNums;
    })
    
}

//**************************** OPERATOR EVENT LISTENERS ************************************ */

divideBtn.addEventListener('click', (e) => {
    divideBtnClicked = true;
    divideBtn.classList.add('highlight-operator');
    numArr.push(stringNums);
    storeOperator_Num(stringNums, divideOperator);
});
multiplyBtn.addEventListener('click', (e) => {
    multiplyBtnClicked = true;
    multiplyBtn.classList.add('highlight-operator');
    numArr.push(stringNums);
    storeOperator_Num(stringNums, multiplyOperator);
});
subtractBtn.addEventListener('click', (e) => {
    subtractBtnClicked = true;
    subtractBtn.classList.add('highlight-operator');
    numArr.push(stringNums);
    storeOperator_Num(stringNums, subtractOperator);
});
additionBtn.addEventListener('click', (e) => {
    addBtnClicked = true;
    additionBtn.classList.add('highlight-operator');
    numArr.push(stringNums);
    storeOperator_Num(stringNums, additionOperator);
});

//DECIMAL
decimalBtn.addEventListener('click', () => {
    decimalBtnClicked = true;
    
});

//***************************** EQUALS BUTTON EVENT LISTENER ************************************ */

equalsBtn.addEventListener('click', () => {
    numArr.push(+stringNums);
    log(`Array value: ${numArr}`);
    operation(numArr[0], numArr[1]);
});

//CLEAR ALL BUTTON 
clearAllBtn.addEventListener('click', clearAll);

displayNum();