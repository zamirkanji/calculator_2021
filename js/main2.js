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

//********************************************** LOGIC **********************************************
let displayInput = 0;
let displayCurrent = 0;

let numArr = [];

const divideOperator = ' / ';
const multiplyOperator = ' * ';
const subtractOperator = ' - ';
const additionOperator = ' + ';

let stringNums = '';

let addBtnClicked = false;
let subtractBtnClicked = false;
let multiplyBtnClicked = false;
let divideBtnClicked = false;

//windows on load show default 0
// window.onload = (e) => {
//     displayText.textContent = displayInput;
//     displayText.textContent = displayCurrent;
// }

//*********************************CHECK IF MOBILE************************************

let mobile = navigator.userAgent;
const isIOS = () => {
    return (
        /iPad|iPhone|iPod/.test(mobile)
    );
}
let isMobile = isIOS();
console.log(isMobile);

//************************************ OPERAND BTN EVENTS/DISPLAY NUMBERS *************************************** */
allNumberBtns.forEach(btn =>  {
    btn.addEventListener('click', (e) => {
        let val = e.target.value;
        displayText.textContent = val;
        displayText.textContent = stringNums +=  val;       
    })
})
//************************************* STORE NUMBER, OPERATOR ****************************** */
    
function storeOperator_Num (number, operator) {
    displayText.textContent = number + operator;
    stringNums = '';
    // displayText.textContent = displayCurrent;
}

//************************************* OPERATION FUNCTIONS ************************************ */
const divideNums = (a, b) => {
    console.log(a, b);
    let answer = +a / +b;
    displayText.textContent = answer;
    numArr = [];
    numArr.push(answer);
    console.log(numArr);
    stringNums = answer;
    return answer; 
}
const multiplyNums = (a, b) => {
    console.log(a, b);
    let answer = +a * +b;
    displayText.textContent = answer;
    numArr = [];
    // numArr.push(answer);
    stringNums = answer;
    return answer; 
}
const subtractNums = (a, b) => {
    console.log(a, b);
    let answer = +a - +b;
    displayText.textContent = answer;
    numArr = [];
    // numArr.push(answer);
    stringNums = answer;
    return answer; 
}
const addNums = (a, b) => {
    console.log(a, b);
    let answer = +a + +b;
    displayText.textContent = answer;
    numArr = [];
    // numArr.push(answer);
    stringNums = answer;
    return answer; 
}

//**********************************OPERATION ************************************** */

function operation (a, b) {
    // numArr.push(stringNums);
    if (divideBtnClicked == true) {
        divideBtn.classList.remove('highlight-operator');
        divideNums(a, b);
        // console.log(divide_Answer);
    } else if (multiplyBtnClicked == true) {
        const multiply_Answer = multiplyNums(a, b);
    } else if (subtractBtnClicked == true) {
        subtractNums(a, b);
    } else if (addBtnClicked == true) {
        addNums(a, b);
    } else {
        return;
    }
    
}

// ************************* CLEAR ALL, CLEAR ENTRY **************************************

const clearAll = () => {
    // tempArr = [];
    // displayText.textContent = displayCurrent;
    // displayText.classList.toggle('vis-hidden');
    let clearAllConfirm = window.confirm('Are you sure you want to Clear Everything?');
    if (clearAllConfirm) {location.reload()};
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
    numArr.push(stringNums);
    storeOperator_Num(stringNums, multiplyOperator);
});
subtractBtn.addEventListener('click', (e) => {
    subtractBtnClicked = true;
    numArr.push(stringNums);
    storeOperator_Num(stringNums, subtractOperator);
});
additionBtn.addEventListener('click', (e) => {
    addBtnClicked = true;
    numArr.push(stringNums);
    storeOperator_Num(stringNums, additionOperator);
});


//EQUALS BUTTONS

equalsBtn.addEventListener('click', () => {
    // storeOperator_Num(numArr, stringNums);
    
    // if (numArr.length == 2) {
    //     numArr = [];
    //     // numArr.push(answer);
    //     stringNums = answer;
    //     console.log(numArr, stringNums);
    // } else {
        numArr.push(stringNums);
        operation(numArr[0], numArr[1]);
    // }
});


//CLEAR ALL BUTTON 
if (isMobile) {
    clearAllBtn.addEventListener('touchstart', clearAll);
} else {
    clearAllBtn.addEventListener('click', clearAll);
}

//CLEAR ENTRY (get last version num pushed to calculator (from storeNum()) and clear it 