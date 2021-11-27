// console.log("Test");
//**************************************** SELECTORS ************************************************
const input_output = document.querySelector('#in_out_txt');
const currentNum = document.querySelector('.current_txt');
const currentNumContainer = document.querySelector('.current_num_container');



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

const divideOperator = ' / ';
const multiplyOperator = ' * ';
const subtractOperator = ' - ';
const additionOperator = ' + ';

let a;
let b;

let addBtnClicked = false;
let subtractBtnClicked = false;
let multiplyBtnClicked = false;
let divideBtnClicked = false;

//windows on load show default array 
window.onload = (e) => {
    input_output.textContent = displayInput;
    currentNum.textContent = displayCurrent;
}

let stringNums = '';

allNumberBtns.forEach(btn =>  {
    btn.addEventListener("click", (e) => {
        let val = e.target.value;
        input_output.textContent = val;
        input_output.textContent = stringNums +=  val;       
    })
})

function storeOperator_Num (number, operator) {
    // currentNum.classList.toggle('vis-hidden');
    // currentNumContainer.classList.remove('vis-hidden');
    // numArr.push(number);
    currentNum.textContent = number + operator;
    stringNums = '';
    input_output.textContent = displayCurrent;
}

const divideNums = (a, b) => {
    console.log(a, b);
    let answer = a / b;
    input_output.textContent = answer;
    return a / b; 
}
const multiplyNums = (a, b) => {
    console.log(a, b);
    let answer = a * b;
    input_output.textContent = answer;
    return a * b; 
}
const subtractNums = (a, b) => {
    console.log(a, b);
    let answer = a - b;
    input_output.textContent = answer;
    return a - b; 
}
const addNums = (a, b) => {
    console.log(a, b);
    let answer = a + b;
    input_output.textContent = answer;
    return a + b; 
}


function operation (a, b) {
    // numArr.push(stringNums);
    if (divideBtnClicked == true) {
        divideNums(a, b);
    } else if (multiplyBtnClicked == true) {
        multiplyNums(a, b);
    } else if (subtractBtnClicked == true) {
        subtractNums(a, b);
    }
    
}

// ************************* CLEAR ALL, CLEAR ENTRY **************************************

// const clearAll = () => {
//     tempArr = [];
//     input_output.textContent = displayCurrent;
//     currentNum.classList.toggle('vis-hidden');
// }


// ******************************EVENT LISTENERS ******************************************

divideBtn.addEventListener('click', (e) => {
    divideBtnClicked = true;
    numArr.push(stringNums);
    console.log(numArr);
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

    numArr.push(stringNums);
    operation(numArr[0], numArr[1]);
});


//CLEAR ALL BUTTON 
// clearAllBtn.addEventListener('click', clearAll);

//CLEAR ENTRY (get last version num pushed to calculator (from storeNum()) and clear it 