/**
 * Created by Ivaylo on 5/14/2018.
 */

function attachEventsListeners() {
    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    let daysBtn = document.querySelector('#daysBtn');
    let hoursBtn = document.querySelector('#hoursBtn');
    let minutesBtn = document.querySelector('#minutesBtn');
    let secondsBtn = document.querySelector('#secondsBtn');

    daysBtn.addEventListener('click', () => {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(days.value) * 24 * 60;
        seconds.value = Number(days.value) * 24 * 60 * 60;
    });

    hoursBtn.addEventListener('click', () => {
        days.value = Number(hours.value) / 24;
        minutes.value = Number(days.value) * 24 * 60;
        seconds.value = Number(days.value) * 24 * 60 * 60;
    });

    minutesBtn.addEventListener('click', () => {
        days.value = Number(minutes.value) / 24 / 60;
        hours.value = Number(days.value) * 24;
        seconds.value = Number(days.value) * 24 * 60 * 60;
    });

    secondsBtn.addEventListener('click', () => {
        days.value = Number(seconds.value) / 24 / 60 / 60;
        hours.value = Number(days.value) * 24;
        minutes.value = Number(days.value) * 24 * 60;
    });
}