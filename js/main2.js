if (typeof window === 'object') {
    // Check if document is finally loaded
    document.addEventListener("DOMContentLoaded", function() {
       displayNum();
       keyEvent();
    });
 }

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
const plus_minusBtn = document.querySelector('.btn-plus-minus');

//********************************************** VARIABLES **********************************************
const log = console.log;

const divideOperator = ' / ';
const multiplyOperator = ' * ';
const subtractOperator = ' - ';
const additionOperator = ' + ';

// let displayInput = 0;
// let displayCurrent = 0;
let storeNumbers = [];
let lastEntry;

let displayNumber = '';

let addBtnClicked = false;
let subtractBtnClicked = false;
let multiplyBtnClicked = false;
let divideBtnClicked = false;
let decimalBtnClicked = false;
let plus_minusBtnClicked = false;
let equalsBtnClicked = false;

//************************************ OPERAND BTN EVENTS/DISPLAY NUMBERS *************************************** */

const keyEvent = () => {
    document.addEventListener('keydown', e => {
        log(e.key);
        let keyCodeNumber = e.key;
        if (keyCodeNumber === "1") {
            log("you pressed 1");
            displayText.textContent = "1";
            displayText.textContent = displayNumber +=  val;
        }
    })
}

const displayNum = (e) => {
    clearEntry();
    decimalEventListener();
    plus_minusEventListener();
    insertComma();
    allNumberBtns.forEach(btn =>  {
        btn.addEventListener('click', (e) => {
            // checkIfOperatorClicked();
            if (displayNumber.length == 16) {
                return;
            } else {
                let val = e.target.value;
                displayText.textContent = val;
                displayText.textContent = displayNumber +=  val;
            }
        })
    })
    return displayNumber;
}

const checkIfOperatorClicked = () => {
    if (divideBtnClicked) {
        divideBtnClicked = false;
        if (divideBtn.classList.contains('highlight-operator')) {
            divideBtn.classList.remove('highlight-operator');
        }
    }
    if (multiplyBtnClicked) {
        multiplyBtnClicked = false;
        if (multiplyBtn.classList.contains('highlight-operator')) {
            multiplyBtn.classList.remove('highlight-operator');
        }
    }
    if (addBtnClicked) {
        addBtnClicked = false;
        if (additionBtn.classList.contains('highlight-operator')) {
            additionBtn.classList.remove('highlight-operator');
        }
    }
    if (subtractBtnClicked) {
        subtractBtnClicked = false;
        if (subtractBtn.classList.contains('highlight-operator')) {
            subtractBtn.classList.remove('highlight-operator');
        }
    }
}
//************************************* STORE NUMBER, OPERATOR ****************************** */
    
function storeOperator_Num (number, operator) {
    displayText.textContent = number + operator;
    displayNumber = '';
}

//************************************* OPERATION FUNCTIONS ************************************ */

const divideNums = (a, b) => {
    divideBtnClicked = false;
    log(a, b);
    let answer = a / b;
        if (a % b === 0) {
        displayText.textContent = answer;
        storeNumbers = [];
        displayNumber = answer;
        return displayNumber; 
    } else {
        answer = answer.toFixed(4);
        displayText.textContent = answer;
        storeNumbers = [];
        displayNumber = answer;
        return displayNumber; 
    }
}
const multiplyNums = (a, b) => {
    multiplyBtnClicked = false;
    log(a, b);
    let answer = a * b;

    displayText.textContent = answer;
    storeNumbers = [];
    displayNumber = answer;
    return displayNumber; 
}
const subtractNums = (a, b) => {
    subtractBtnClicked = false;
    log(a, b);
    let answer = a - b;
    displayText.textContent = answer;
    storeNumbers = [];
    displayNumber = answer;
    return displayNumber; 
}
const addNums = (a, b) => {
    addBtnClicked = false;
    log(a, b);
    let answer = Number(a) + Number(b);
    displayText.textContent = answer;
    storeNumbers = [];
    displayNumber = answer;
    return displayNumber; 
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
        if (displayNumber == '') {
            return;
        } else { 
            if (displayNumber.length < 2 && displayNumber !== '0') {
                displayNumber = '';
                displayText.textContent = '0';
            } else if (displayText == '0' || displayText == '') {
                return;
            } else if (equalsBtnClicked && displayText.length < 1 && storeNumbers[storeNumbers.length >= 1]) {
                lastEntry = storeNumbers[storeNumbers.length - 1].pop();
                displayText.textContent = storeNumbers[0];
                if (storeNumbers === []) {
                    displayText.textContent = '0';
                }
                log(storeNumbers);
            } else {
                displayNumber = String(displayNumber).substring(0, displayNumber.length - 1);
                displayText.textContent = displayNumber;
            }
        }
    })  
}

//**************************** OPERATOR EVENT LISTENERS ************************************ */

divideBtn.addEventListener('click', (e) => {
    // if (addBtnClicked || subtractBtnClicked|| multiplyBtnClicked) {
    //     storeNumbers.push(+displayNumber);
    //     log(storeNumbers);
    //     operation(storeNumbers[0], storeNumbers[1]);
    // }
    if (displayNumber === '0' || displayNumber === '') {
        displayText.textContent = NaN;
    }
    if (displayNumber.length < 1) {
        return;    
    } else {
        divideBtnClicked = true;
        divideBtn.classList.add('highlight-operator');
        log(`displayNumber on operator: ${displayNumber}`);
        storeNumbers.push(displayNumber);
        storeOperator_Num(displayNumber, divideOperator);
    }
});
multiplyBtn.addEventListener('click', (e) => {
    // if (addBtnClicked || divideBtnClicked || subtractBtnClicked) {
    //     storeNumbers.push(+displayNumber);
    //     log(storeNumbers);
    //     operation(storeNumbers[0], storeNumbers[1]);
    // }
    if (displayNumber.length < 1) {
        return;
    } else {
        multiplyBtnClicked = true;
        multiplyBtn.classList.add('highlight-operator');
        log(`displayNumber on operator: ${displayNumber}`);
        storeNumbers.push(displayNumber);
        log(storeNumbers);
        storeOperator_Num(displayNumber, multiplyOperator);
    }
});
subtractBtn.addEventListener('click', (e) => {
    // if (addBtnClicked || divideBtnClicked || multiplyBtnClicked) {
    //     storeNumbers.push(+displayNumber);
    //     log(storeNumbers);
    //     operation(storeNumbers[0], storeNumbers[1]);
    // }
    if (displayNumber.length < 1) {
        return;
    } else {
        subtractBtnClicked = true;
        subtractBtn.classList.add('highlight-operator');
        log(`displayNumber on operator: ${displayNumber}`);
        storeNumbers.push(displayNumber);
        storeOperator_Num(displayNumber, subtractOperator);
    }
});
additionBtn.addEventListener('click', (e) => {
    // if (subtractBtnClicked || divideBtnClicked || multiplyBtnClicked) {
    //     storeNumbers.push(+displayNumber);
    //     log(storeNumbers);
    //     operation(storeNumbers[0], storeNumbers[1]);
    // }
    if (displayNumber.length < 1) {
        return;
    } else {
        addBtnClicked = true;
        additionBtn.classList.add('highlight-operator');
        log(`displayNumber on operator: ${displayNumber}`);
        storeNumbers.push(displayNumber);
        log(storeNumbers);
        storeOperator_Num(displayNumber, additionOperator);
    }
});

//***************************DECIMAL AND PLUS MINUS EVENT LISTENERS ******************************

const decimalEventListener = () => {
    decimalBtn.addEventListener('click', () => {
        decimalBtnClicked = true;
        if (String(displayNumber).includes('.')) {
            return; 
        } else {
            displayNumber = displayNumber + ".";
            displayText.textContent = displayNumber;
        }
    });
}
const plus_minusEventListener = () => {
    plus_minusBtn.addEventListener('click', () => {
        plus_minusBtnClicked = true;
        if (String(displayNumber).includes('-')) {
            displayNumber = displayNumber.replace(/^-+/i, ''); ;
            displayText.textContent = displayNumber;
        } else if (displayNumber == '' || displayNumber == '0') {
            displayText.textContent == '0';
        } 
        else {
            displayNumber = "-" + displayNumber;
            displayText.textContent = displayNumber;
        }
    });
}

const insertComma = () => {}
//***************************** EQUALS BUTTON EVENT LISTENER ************************************ */

equalsBtn.addEventListener('click', () => {
    // if (storeNumbers.length === 1) {
    //     let duplicate = storeNumbers[0];
    //     storeNumbers.push(duplicate);
    //     log(storeNumbers);
    //     operation(storeNumbers[0], storeNumbers[1]);
    // }
    if (storeNumbers.length === 2) {

    }
    equalsBtnClicked = true;
    if (storeNumbers.length === 0) {
        return;
    } else {
        log(`displayNumber on equal: ${displayNumber}`);
        
        storeNumbers.push(+displayNumber);
        log(`Array value: ${storeNumbers}`);
        operation(storeNumbers[0], storeNumbers[1]);
    }
});

//CLEAR ALL BUTTON 
clearAllBtn.addEventListener('click', clearAll);