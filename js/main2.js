if (typeof window === 'object') {
    // Check if document is finally loaded
    document.addEventListener("DOMContentLoaded", (e) => {
        if (e.target == document.body) {
            e.preventDefault();
        }
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

let storeNumbers = [];
let lastEntry;
let operatorTemp = null;
let displayNumber = '';
let keyCodeNumber;

let addBtnClicked = false;
let subtractBtnClicked = false;
let multiplyBtnClicked = false;
let divideBtnClicked = false;
let decimalBtnClicked = false;
let plus_minusBtnClicked = false;
let equalsBtnClicked = false;
let numBtnClicked = false;

//************************************ OPERAND BTN EVENTS/DISPLAY NUMBERS *************************************** */

const keyEvent = () => {
    document.addEventListener('keydown', e => {
        log(e.key);
        keyCodeNumber = e.key;
        if (displayNumber.length === 16) {
            return;
        }
        if (e.code === 'Space' && e.target == document.body) {
            e.preventDefault();
            displayText.textContent = displayNumber += ' ';
        }
        switch (keyCodeNumber) {
            case '+':
                addBtnEvent();
                break;
            case '-':
                subtractBtnEvent();
                break;
            case '/':
                divideBtnEvent();
                break;
            case '+':
                addBtnEvent();
                break;
            case 'Enter': 
                equalsBtnEvent();
                break;
            default: 
                displayText.textContent = keyCodeNumber;
                displayText.textContent = displayNumber += keyCodeNumber;
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
            let val = e.target.value;
            numBtnClicked = true;
            checkIfOperatorClicked();
            checkEqualsBtnClicked();
            // ********************
            if (operatorTemp == null && equalsBtnClicked == true) {
                displayNumber = '';
                operatorTemp = [];
                displayText.textContent = val;
                displayText.textContent = displayNumber +=  val; 
            // **********************   
            } else {
                equalsBtnClicked = false;
            }
            if (e.target.value == 0 && (displayNumber == '0' || displayNumber == '')) {
                return;
            }
            if (displayNumber.length == 16) {
                return;
            } else {
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

const checkEqualsBtnClicked = () => {
    if (equalsBtnClicked === false) {
        return;
    }

    // if (equalsBtnClicked === true && divideBtnClicked === false && multiplyBtnClicked === false && subtractBtnClicked === false && addBtnClicked === false) {
    //     storeNumbers = [];
    //     displayText.textContent = '0';
    // }
}
//************************************* STORE NUMBER, OPERATOR ****************************** */
    
function showOperatorNum (number, operator) {
    // displayText.textContent = number + operator;
    displayText.textContent = number;
    displayNumber = '';
}

//************************************* OPERATION FUNCTIONS ************************************ */

const divideNums = (a, b) => {
    divideBtnClicked = false;
    resetOperatorTemp();
    log(a, b);
    let answer = a / b;
        if (a % b === 0) {
        displayText.textContent = answer;
        storeNumbers = [];
        displayNumber = answer;
        log(operatorTemp);
        return displayNumber; 
    } else {
        // answer = answer.toFixed(12);
        displayText.textContent = answer;
        storeNumbers = [];
        displayNumber = answer;
        return displayNumber; 
    }
}
const multiplyNums = (a, b) => {
    multiplyBtnClicked = false;
    resetOperatorTemp();
    log(a, b);
    let answer = a * b;
    // answer = answer.toFixed(12);
    displayText.textContent = answer;
    storeNumbers = [];
    displayNumber = answer;
    return displayNumber; 
}
const subtractNums = (a, b) => {
    subtractBtnClicked = false;
    resetOperatorTemp();
    log(a, b);
    let answer = a - b;
    // answer = answer.toFixed(12);
    displayText.textContent = answer;
    storeNumbers = [];
    displayNumber = answer;
    return displayNumber; 
}
const addNums = (a, b) => {
    addBtnClicked = false;
    resetOperatorTemp();
    log(a, b);
    let answer = Number(a) + Number(b);
    // answer = answer.toFixed(12);
    displayText.textContent = answer;
    storeNumbers = [];
    displayNumber = answer;
    return displayNumber; 
}

//**********************************OPERATION ************************************** */

function operation (a, b, operator) {
    log(operator);
    if (operatorTemp === divideOperator) {
        divideBtn.classList.remove('highlight-operator');
        divideNums(a, b);
    } else if (operatorTemp === multiplyOperator) {
        multiplyBtn.classList.remove('highlight-operator');
        multiplyNums(a, b);
    } else if (operatorTemp === subtractOperator) {
        subtractBtn.classList.remove('highlight-operator');
        subtractNums(a, b);
    } else if (operatorTemp === additionOperator) {
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
        if (equalsBtnClicked && storeNumbers.length >= 0) {
            log(`pop out number`);
            log(storeNumbers, displayNumber);
            storeNumbers = [];
            displayNumber = '';
            displayText.textContent = 0;
        } 
        if (displayNumber == '') {
            return;
        } else { 
            if (displayNumber.length < 2 && displayNumber !== '0') {
                displayNumber = '';
                displayText.textContent = '0';
            } else if (displayText == '0' || displayText == '') {
                return;
            } else if (equalsBtnClicked && displayText.length < 1 && storeNumbers[storeNumbers.length >= 1]) {
                log(`pop out number`);
                lastEntry = storeNumbers[storeNumbers.length - 1].pop();
                //check this***************
                displayText.textContent = storeNumbers[0];
                log(storeNumbers);
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

//************************************* OPERATOR EVENT LISTENERS ************************************ */
const divideBtnEvent = (kc) => {
    if (storeNumbers.length === 2) {
        log(`already two in array: ${storeNumbers}`);
    }
    if ((operatorTemp === additionOperator || operatorTemp === multiplyOperator|| operatorTemp === subtractOperator || operatorTemp === divideOperator) && equalsBtnClicked == false) {
        storeNumbers.push(+displayNumber);
        log(storeNumbers);
        operation(storeNumbers[0], storeNumbers[1]);
    }
    if (displayNumber === '0' || displayNumber === '') {
        displayText.textContent = 'Error';
    }
    if (displayNumber.length < 1) {
        return;    
    } else {
        divideBtnClicked = true;
        operatorTemp = divideOperator;
        divideBtn.classList.add('highlight-operator');
        log(`displayNumber on operator: ${displayNumber}`);
        storeNumbers.push(displayNumber);
        showOperatorNum(displayNumber, divideOperator);
    }
}

const multiplyBtnEvent = (kc) => {
    if (storeNumbers.length === 1 && (operatorTemp === additionOperator || operatorTemp === multiplyOperator|| operatorTemp === subtractOperator || operatorTemp === divideOperator) && equalsBtnClicked == false) {
        storeNumbers.push(displayNumber);
        log(`test push: string of operators after one equals equation has been made ${storeNumbers}`);

    }
    
    if ((operatorTemp === additionOperator || operatorTemp === multiplyOperator|| operatorTemp === subtractOperator || operatorTemp === divideOperator) && equalsBtnClicked == false) {
        storeNumbers.push(+displayNumber);
        log(storeNumbers);
        operation(storeNumbers[0], storeNumbers[1]);
    }
    if (displayNumber.length < 1) {
        return;
    } else {
        multiplyBtnClicked = true;
        operatorTemp = multiplyOperator;
        multiplyBtn.classList.add('highlight-operator');
        log(`displayNumber on operator: ${displayNumber}`);
        storeNumbers.push(displayNumber);
        log(storeNumbers);
        showOperatorNum(displayNumber, multiplyOperator);
    }
}

const subtractBtnEvent = (kc) => {
    if ((operatorTemp === additionOperator || operatorTemp === multiplyOperator|| operatorTemp === subtractOperator || operatorTemp === divideOperator) && equalsBtnClicked == false) {
        storeNumbers.push(+displayNumber);
        log(storeNumbers);
        operation(storeNumbers[0], storeNumbers[1]);
    }
    if (displayNumber.length < 1) {
        return;
    } else {
        subtractBtnClicked = true;
        operatorTemp = subtractOperator;
        subtractBtn.classList.add('highlight-operator');
        log(`displayNumber on operator: ${displayNumber}`);
        storeNumbers.push(displayNumber);
        showOperatorNum(displayNumber, subtractOperator);
    }
}

const addBtnEvent = (kc) => {
    if ((operatorTemp === additionOperator || operatorTemp === multiplyOperator|| operatorTemp === subtractOperator || operatorTemp === divideOperator) && equalsBtnClicked == false) {
        storeNumbers.push(+displayNumber);
        log(storeNumbers);
        operation(storeNumbers[0], storeNumbers[1]);
    }
    if (displayNumber.length < 1) {
        return;
    } else {
        addBtnClicked = true;
        operatorTemp = additionOperator;
        additionBtn.classList.add('highlight-operator');
        log(`displayNumber on operator: ${displayNumber}`);
        storeNumbers.push(displayNumber);
        log(storeNumbers);
        showOperatorNum(displayNumber, additionOperator);
    }
}    

    

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
        plus_minusBtn.classList.toggle('highlight-operator');
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

const insertComma = () => {

}

//***************************** EQUALS BUTTON EVENT LISTENER ************************************ */
const equalsBtnEvent = (kc) => {
    equalsBtnClicked = true;
    log(`Equals btn pressed (True)`);
    log(storeNumbers);
    if(storeNumbers.length === 0) {
        displayNumber = '';
        displayText.textContent = 0;
    }
    if (storeNumbers.length === 1 && (addBtnClicked || multiplyBtnClicked || subtractBtnClicked || divideBtnClicked)) {
        let duplicate = storeNumbers[0];
        storeNumbers.push(duplicate);
        log(storeNumbers);
        operation(storeNumbers[0], storeNumbers[1]);
    }
    if (storeNumbers.length === 0) {
        return;
    } else {
        log(`displayNumber on equal: ${displayNumber}`);
        storeNumbers.push(+displayNumber);
        log(`Array value: ${storeNumbers}`);
        operation(storeNumbers[0], storeNumbers[1], operatorTemp);
    }
}

const resetOperatorTemp = () => {
    log('operator temp reset');
    return operatorTemp = null;
}

//CLEAR ALL BUTTON 
clearAllBtn.addEventListener('click', clearAll);
divideBtn.addEventListener('click', divideBtnEvent);
multiplyBtn.addEventListener('click', multiplyBtnEvent);
subtractBtn.addEventListener('click', subtractBtnEvent);
additionBtn.addEventListener('click', addBtnEvent);
equalsBtn.addEventListener('click', equalsBtnEvent);


