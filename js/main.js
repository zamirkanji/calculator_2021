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
let displayFirstNum = [0];
let displaySecondNum = [0];
let tempArr = [0];

let a = null;
let b = null;

let addBtnClicked = false;
let subtractBtnClicked = false;
let multiplyBtnClicked = false;
let divideBtnClicked = false;

//windows on load show default array 
window.onload = (e) => {
    input_output.textContent = displayFirstNum.join('');
    currentNum.textContent = tempArr.join('');
    storeFirstNum();
}


const storeFirstNum = (e) => {
    allNumberBtns.forEach(btn =>  {
        btn.addEventListener("click", (e) => {
            if (e.target.value == 0) {
                return;
            }
            displayFirstNum.push(e.target.value); 
            if (displayFirstNum[0] == 0 ) {
                displayFirstNum.shift();
            }
            
            // console.log(displayFirstNum);
            input_output.textContent = displayFirstNum.join('');
        })
    })
    console.log(displayFirstNum);
    return displayFirstNum;
}

const storeSecondNum =  (e) => {
    allNumberBtns.forEach(btn =>  {
        btn.addEventListener("click", (e) => {
            if (e.target.value == 0) {
                return;
            }
            displaySecondNum.push(e.target.value); 
            if (displaySecondNum[0] == 0 ) {
                displaySecondNum.shift();
            }
            
            // console.log(displaySecondNum);
            input_output.textContent = displaySecondNum.join('');
        })
    })
    console.log(displaySecondNum);
    return displaySecondNum;

}

// const getNums = (cb) => {
//     console.log(a);
//     // b = storeSecondNum();
//     operation(a, b);
// }

//could do if array.length == 1 and e.target.value == 0 then dont allow zero to be added, othersise fine 
// allNumberBtns.forEach(btn =>  {
//     btn.addEventListener("click", storeFirstNum);
// });

function displayDivide () {
    divideBtnClicked = true;
    // let tempArr = storeNextNum.concat(displayFirstNum.join(''));
    currentNum.textContent = displayFirstNum.join('') + ' / ';
    displayFirstNum = [0];
    currentNum.classList.toggle('vis-hidden');
    input_output.textContent = displayFirstNum;
    storeSecondNum();
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
    // if (tempArr == []) {
        
    // }

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
equalsBtn.addEventListener('click', operation);


//CLEAR ALL BUTTON 
clearAllBtn.addEventListener('click', clearAll);

//CLEAR ENTRY (get last version num pushed to calculator (from storeNum()) and clear it 