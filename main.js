window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.getElementById("minutes");
    let appendSeconds = document.getElementById("seconds");
    let appendTens = document.getElementById("tens");


    let startBtn = document.getElementById("start");
    let pauseBtn = document.getElementById("pause");
    let resetBtn = document.getElementById("reset");


    let Interval;



    const startTimer = () => {
        tens++
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens
        }
        if (tens > 9) {
            appendTens.innerHTML = tens
        }
        if (tens > 99) {
            seconds++
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        }
    };


    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    pauseBtn.onclick = () => {
        clearInterval(Interval);
    }

    resetBtn.onclick = () => {
        clearInterval(Interval)
        tens = '00';
        seconds = '00';
        minutes = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }
};