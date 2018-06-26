/**
 * Created by Ivaylo on 5/13/2018.
 */

function countdown(startTime) {
    let time = startTime;
    let box = document.getElementById('time');

    function decrement() {
        time--;
        box.value = Math.trunc(time / 60) +
            ':' + ("0" + (time % 60)).slice(-2);
    }

    let intervalId = setInterval(decrement, 1000);
}
