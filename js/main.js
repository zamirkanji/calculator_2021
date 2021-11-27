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
let numArr = [];
let storeTwoNums = [];

let addBtnClicked = false;
let subtractBtnClicked = false;
let multiplyBtnClicked = false;
let divideBtnClicked = false;

//windows on load show default array 
window.onload = (e) => {
    input_output.textContent = displayInput;
    currentNum.textContent = displayCurrent;
   
    displayNum();
}

const displayNum = () => {
    let stringNums = '';
    allNumberBtns.forEach(btn =>  {
        
        btn.addEventListener("click", (e) => {
            console.log(e.target.value);
            console.log(typeof e.target.value);
        // if (e.target.value == 0) {
        //     return;
        // }
        // numArr.push(e.target.value); 
        // if (numArr[0] == 0 ) {
            //     numArr.shift();
            // }
            // input_output.textContent = numArr.join('');
            let val = e.target.value;
            
            input_output.textContent = val;
            input_output.textContent = stringNums +=  val;
            
        })
    })
    // input_output.textContent = stringNums;
    return +stringNums;
}



function displayDivide () {
    divideBtnClicked = true;
    storeTwoNums.push(numArr);
    console.log(storeTwoNums);
    currentNum.textContent = numArr.join('') + ' / ';
    currentNum.classList.toggle('vis-hidden');
    numArr = [];
    input_output.textContent = displayCurrent;
}

const divide = (a, b) => {
    console.log(a, b);
}

// function multiply (a, b) {
//     multiplyBtnClicked = true;
//     let tempArr = storeNextNum.concat(numArr.join(''));
//     currentNum.textContent = tempArr  + ' * ';
//     numArr = [0];
//     currentNum.classList.toggle('vis-hidden');
//     input_output.textContent = numArr;
//     // return nextInput
// }
// function subtract (a, b) {
//     subtractBtnClicked = true;
//     let tempArr = storeNextNum.concat(numArr.join(''));
//     currentNum.textContent = tempArr  + ' - ';
//     numArr = [0];
//     currentNum.classList.toggle('vis-hidden');
//     input_output.textContent = numArr;
//     // return nextInput
// }
// function add (a, b) {
//     addBtnClicked = true;
//     let tempArr = storeNextNum.concat(numArr.join(''));
//     currentNum.textContent = tempArr  + ' + ';
//     numArr = [0];
//     currentNum.classList.toggle('vis-hidden');
//     input_output.textContent = numArr;
//     // return nextInput
// }


function operation (a, b) {
    if (divideBtnClicked) {
        divide(numArr. storeTwoNums);
    }
    
}

//clear currentNum array and return to default [0]
const clearAll = () => {
    numArr = [0];
    storeTwoNums = [0];
    tempArr = [];
    input_output.textContent = numArr;
    currentNum.classList.toggle('vis-hidden');
}


// ******************************EVENT LISTENERS ******************************************




divideBtn.addEventListener('click', displayDivide);
// multiplyBtn.addEventListener('click', multiply);
// subtractBtn.addEventListener('click', subtract);
// additionBtn.addEventListener('click', add);

//EQUALS BUTTONS
equalsBtn.addEventListener('click', () => {
    operation(numArr, storeTwoNums);
});


//CLEAR ALL BUTTON 
clearAllBtn.addEventListener('click', clearAll);

//CLEAR ENTRY (get last version num pushed to calculator (from storeNum()) and clear it 