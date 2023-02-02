let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let additionButton = document.querySelector('#addButton');
let subtractionButton = document.querySelector('#minusButton');
let multiplicationButton = document.querySelector('#multiplyButton');
let divisonButton = document.querySelector('#divideButton');
let outputField= document.querySelector('#output');

function add () {
    let addition1 = Number(input1.value);
    let addition2 = Number(input2.value);
    let sum = addition1 + addition2;
    outputField.value = sum;

}
function subtract () {
    let subtract1 = Number(input1.value);
    let subtract2 = Number(input2.value);
    let difference = subtract1 - subtract2;
    outputField.value = difference;
}

function multiply () {
    let multiply1 = Number(input1.value);
    let multiply2 = Number(input2.value);
    let product = multiply1 * multiply2;
    outputField.value = product;
}

function divide () {
    let divide1 = Number(input1.value);
    let divide2 = Number(input2.value);
    let result = divide1 / divide2;
    outputField.value = result;
}


additionButton.onclick = () => add();
subtractionButton.onclick = () => subtract();
multiplicationButton.onclick = () => multiply();
divisonButton.onclick = () => divide();