// console.log("Test");
//**************************************** SELECTORS ************************************************
const input_output = document.querySelector('#in_out_txt');
const allNumberBtns = document.querySelectorAll('.num-btn');
const clearAllBtn = document.querySelector('.clear-all');
const clearEntryBtn = document.querySelector('.clear-entry');
const currentNum = document.querySelector('#current_txt');

const divideBtn = document.querySelector('.divide-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const subtractBtn = document.querySelector('.subtract-btn');
const additionBtn = document.querySelector('.addition-btn');
const equalsBtn = document.querySelector('.equals-btn');

//*********************** LOGIC *****************************

//default array (onload) 0
let storeCurrentNum = [0];
let temp = [0];

//windows on load show default array 
window.onload = (e) => {
    // console.log(e);
    input_output.textContent = storeCurrentNum.join('');
    currentNum.textContent = temp.join('');
}

//clear currentNum array and return to default [0]
const clearAll = () => {
    // if (temp == []) {
        
    // }

    storeCurrentNum = [0];
    temp = [];
    input_output.textContent = storeCurrentNum;
    currentNum.classList.toggle('vis-hidden');
}

//push each number clicked on calculator to storeCurrentNum array and show on calculator screen
function storeNum (e) {
    if (e.target.value == 0) {
        return;
    }
    storeCurrentNum.push(e.target.value); 
    if (storeCurrentNum[0] == 0 ) {
        storeCurrentNum.shift();
    }
    input_output.textContent = storeCurrentNum.join('');
    console.log(storeCurrentNum);
}

//could do if array.length == 1 and e.target.value == 0 then dont allow zero to be added, othersise fine 

allNumberBtns.forEach(btn =>  {
    btn.addEventListener("click", storeNum);
});

let storeNextNum = [];

function divide (e) {
    // everytime an operator is pressed...input_out val needs to be pushed to top (current) AND stored 
    let temp = storeNextNum.concat(storeCurrentNum.join(''));
    currentNum.textContent = temp  + ' / ';
    storeCurrentNum = [0];
    currentNum.classList.toggle('vis-hidden');
    input_output.textContent = storeCurrentNum;

    //clear input_outout, move to currentNum, and move onto nextInput function 
    // return nextInput
}

//takes next input and pushes to temp array, if equals operate on arrays, if new operator, call function again to add next input to temp
function nextInput (e) {
    
}


function operation () {

}


// ******************************EVENT LISTENERS ******************************************

divideBtn.addEventListener('click', divide);
// multiplyBtn.addEventListener('click', divide);
// subtractBtn.addEventListener('click', divide);
// additionBtn.addEventListener('click', divide);

//EQUALS BUTTONS
equalsBtn.addEventListener('click', operation);


//CLEAR ALL BUTTON 
clearAllBtn.addEventListener('click', clearAll);

//CLEAR ENTRY (get last version num pushed to calculator (from storeNum()) and clear it 