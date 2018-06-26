/**
 * Created by Ivaylo on 5/14/2018.
 */

function toggle() {
    let extra = document.querySelector('#extra');
    let button = document.querySelector('.button');
    if(button.textContent === "More"){
        extra.style.display = 'block';
        button.textContent ="Less";

    }else {
        extra.style.display = 'none';
        button.textContent ="More";
    }
}

function toggleJudge() {
    let extra = document.getElementById('extra');
    let button = document.getElementById('accordion').children[0].children[0];
    if(button.textContent === 'More'){
        button.textContent = 'Less';
        extra.style.display = 'block';
    }else{
        button.textContent = 'More';
        extra.style.display = 'none';
    }
}