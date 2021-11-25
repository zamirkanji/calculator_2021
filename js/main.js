// console.log("Test");
//SELECTORS ************************************************
const input_output = document.querySelector('#in_out_txt');
const allNumberBtns = document.querySelectorAll('.num-btn');
const clearAllBtn = document.querySelector('.clear-all');
const clearEntryBtn = document.querySelector('.clear-entry');

// const zero_num = +document.querySelector('.btn-zero').value;
// const one_num = +document.querySelector('.btn-one').value;
// const two_num = +document.querySelector('.btn-two').value;
// const three_num = +document.querySelector('.btn-three').value;
// const four_num = +document.querySelector('.btn-four').value;
// const five_num = +document.querySelector('.btn-five').value;
// const six_num = +document.querySelector('.btn-six').value;
// const seven_num = +document.querySelector('.btn-seven').value;
// const eight_num = +document.querySelector('.btn-eight').value;
// const nine_num = +document.querySelector('.btn-nine').value;

// const zero = document.querySelector('.btn-zero');
// const one = document.querySelector('.btn-one');
// const two = document.querySelector('.btn-two');
// const three = document.querySelector('.btn-three');
// const four = document.querySelector('.btn-four');
// const five = document.querySelector('.btn-five');
// const six = document.querySelector('.btn-six');
// const seven = document.querySelector('.btn-seven');
// const eight = document.querySelector('.btn-eight');
// const nine = document.querySelector('.btn-nine');
let storeCurrentNum = [0];

function defaultZero () {
    input_output.textContent = storeCurrentNum.join('');
}

// function clearAll() {
//     storeCurrentNum = [];
// }


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