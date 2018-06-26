/**
 * Created by Ivaylo on 5/16/2018.
 */

function timer() {

    let isStarted = false;
    let startBtn = $('#start-timer');
    let pauseBtn = $('#stop-timer');
    let time = 0;
    let timer;
    startBtn.on('click', () => {
        if(!isStarted){
            timer = setInterval(incrementTime, 1000);
            isStarted = true;
        }
    });

    pauseBtn.on('click', () => {
        if(isStarted){
            clearInterval(timer);
            isStarted = false;
        }
    });

    function incrementTime() {
        time ++;
        let seconds = $('#seconds');
        let minutes = $('#minutes');
        let hours = $('#hours');

        seconds.text(('0' + Math.trunc(time % 60)).slice(-2));
        let currentMinutes = time / 60;
        minutes.text(('0' + Math.trunc(currentMinutes % 60)).slice(-2));
        hours.text(('0' + Math.trunc(time / 3600)).slice(-2))

    }
}