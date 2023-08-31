"use strict";

let result = document.getElementById('result');
let keys = {
    shift: false,
    asterik: false,
};

function clr(){
    result.value = ""
}
function display(val) {
    result.value += val
};

function solve(){
    let expression = result.value
    let solution = eval(expression);
    result.value = solution
}

document.onkeydown = function(e) {
    if (e.key === 'Backspace') {
        let str = result.value
        let slicedStr = str.slice(0, -1);
        result.value = slicedStr;
    }
    if (e.key === '*'){
        keys.asterik = true
    };
    if (e.key === 'Shift'){
        keys.shift = true
    };
    if (keys.shift === true && keys.asterik === true){
        result.value += '*'
    }
    switch (e.key) {
        case '1':
            result.value += '1'
            break;
        case '2':
            result.value += '2'
            break;
        case '3':
            result.value += '3'
            break;
        case '4':
            result.value += '4'
            break;
        case '5':
            result.value += '5'
            break;
        case '6':
            result.value += '6'
            break;
        case '7':
            result.value += '7'
            break;
        case '8':
            result.value += '8'
            break;
        case '9':
            result.value += '9'
            break;
        case '0':
            result.value += '0'
            break;
    };
};

document.onkeyup = function(evt) {
    if (evt.key === 'x'){
        keys.x = false
    };

    if (evt.key === 'Shift'){
        keys.shift = false
    };
};