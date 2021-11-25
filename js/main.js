// console.log("Test");
//SELECTORS ************************************************
const input_output = document.querySelector('#in_out_txt');
const allNumberBtns = document.querySelectorAll('.num-btn');
const clearAllBtn = document.querySelector('.clear-all');
const clearEntryBtn = document.querySelector('.clear-entry');


const divideBtn = document.querySelector('.divide-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const subtractBtn = document.querySelector('.subtract-btn');
const additionBtn = document.querySelector('.addition-btn');
const equalsBtn = document.querySelector('.equals-btn');

let storeCurrentNum = [0];

window.onload = (e) => {
    input_output.textContent = storeCurrentNum.join('');
}

// function clearAll() {
//     storeCurrentNum = [];
// }

//could do if array.length == 1 and e.target.value == 0 then dont allow zero to be added, othersise fine 
allNumberBtns.forEach(btn =>  {
    btn.addEventListener("click", function (e) {
        if (e.target.value == 0) {
            return;
        }
        storeCurrentNum.push(e.target.value); 
        //implicit type coercion 
        if (storeCurrentNum[0] == 0 ) {
            storeCurrentNum.shift();
        }
        input_output.textContent = storeCurrentNum.join('');
    })
});

// clearAllBtn.addEventListener('click', clearAll);