// console.log("Test");
//**************************************** SELECTORS ************************************************
const input_output = document.querySelector('#in_out_txt');
const currentNum = document.querySelector('#current_txt');



const allNumberBtns = document.querySelectorAll('.num-btn');
const clearAllBtn = document.querySelector('.clear-all');
const clearEntryBtn = document.querySelector('.clear-entry');

const divideBtn = document.querySelector('.divide-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const subtractBtn = document.querySelector('.subtract-btn');
const additionBtn = document.querySelector('.addition-btn');
const equalsBtn = document.querySelector('.equals-btn');

//*********************** LOGIC *****************************

//default array (onload) 0

let displayInput = 0;
let displayCurrent = 0;
let displayFirstNum = [];
let displaySecondNum = [];
let tempArr = [0];

let a = null;
let b = null;

let addBtnClicked = false;
let subtractBtnClicked = false;
let multiplyBtnClicked = false;
let divideBtnClicked = false;

//windows on load show default array 
window.onload = (e) => {
    input_output.textContent = displayInput;
    currentNum.textContent = displayCurrent;
    buttonEventFirstNum();
}

const buttonEventFirstNum = () => {
allNumberBtns.forEach(btn =>  {
    btn.addEventListener("click", (e) => {
        storeFirstNum(e);
        
    });
});
}
const buttonEventSecondNum = () => {
allNumberBtns.forEach(btn =>  {
    btn.addEventListener("click", (e) => {
        storeSecondNum(e);
        
    });
});
}

const storeFirstNum = (e) => {
    if (e.target.value == 0) {
        return;
    }
    displayFirstNum.push(e.target.value); 
    if (displayFirstNum[0] == 0 ) {
        displayFirstNum.shift();
    }
        
    // console.log(displayFirstNum);
    input_output.textContent = displayFirstNum.join('');
    console.log(displayFirstNum);
    a = displayFirstNum;
    return a;
}
    

const storeSecondNum =  (e) => {
    if (e.target.value == 0) {
        return;
    }
    displaySecondNum.push(e.target.value); 
    if (displaySecondNum[0] == 0 ) {
            displaySecondNum.shift();
    }
    input_output.textContent = displaySecondNum.join('');
    console.log(displaySecondNum);
    b = displaySecondNum;
    return b;

}

// const getNums = (cb) => {
//     console.log(a);
//     // b = storeSecondNum();
//     operation(a, b);
// }



function displayDivide () {
    divideBtnClicked = true;
    currentNum.textContent = displayFirstNum.join('') + ' / ';
    currentNum.classList.toggle('vis-hidden');
    input_output.textContent = displayCurrent;
    buttonEventSecondNum();
}

const divide = (a, b) => {
    console.log(a, b);
}

// function multiply (a, b) {
//     multiplyBtnClicked = true;
//     let tempArr = storeNextNum.concat(displayFirstNum.join(''));
//     currentNum.textContent = tempArr  + ' * ';
//     displayFirstNum = [0];
//     currentNum.classList.toggle('vis-hidden');
//     input_output.textContent = displayFirstNum;
//     // return nextInput
// }
// function subtract (a, b) {
//     subtractBtnClicked = true;
//     let tempArr = storeNextNum.concat(displayFirstNum.join(''));
//     currentNum.textContent = tempArr  + ' - ';
//     displayFirstNum = [0];
//     currentNum.classList.toggle('vis-hidden');
//     input_output.textContent = displayFirstNum;
//     // return nextInput
// }
// function add (a, b) {
//     addBtnClicked = true;
//     let tempArr = storeNextNum.concat(displayFirstNum.join(''));
//     currentNum.textContent = tempArr  + ' + ';
//     displayFirstNum = [0];
//     currentNum.classList.toggle('vis-hidden');
//     input_output.textContent = displayFirstNum;
//     // return nextInput
// }


function operation (a, b) {
    if (divideBtnClicked) {
        divide(displayFirstNum. displaySecondNum);
    }
    
}

//clear currentNum array and return to default [0]
const clearAll = () => {
    displayFirstNum = [0];
    displaySecondNum = [0];
    tempArr = [];
    input_output.textContent = displayFirstNum;
    currentNum.classList.toggle('vis-hidden');
}


// ******************************EVENT LISTENERS ******************************************

divideBtn.addEventListener('click', displayDivide);
// multiplyBtn.addEventListener('click', multiply);
// subtractBtn.addEventListener('click', subtract);
// additionBtn.addEventListener('click', add);

//EQUALS BUTTONS
equalsBtn.addEventListener('click', () => {
    operation(displayFirstNum, displaySecondNum);
});


//CLEAR ALL BUTTON 
clearAllBtn.addEventListener('click', clearAll);

//CLEAR ENTRY (get last version num pushed to calculator (from storeNum()) and clear it 