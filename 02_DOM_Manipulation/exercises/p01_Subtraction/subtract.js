/**
 * Created by Ivaylo on 5/14/2018.
 */

function subtract() {
    let result = document.getElementById('result');
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    result.textContent = Number(firstNumber.value) - Number(secondNumber.value);
}