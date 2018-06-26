/**
 * Created by Ivaylo on 5/14/2018.
 */

function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let select = document.querySelector('select');
    let option = document.createElement('option');
    option.text = text.value;
    option.value = value.value;
    select.appendChild(option);
    text.value = '';
    value.value = '';
}