function displayTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById("session");
    
    if(hours > 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }

    if(hours > 12){
        hours = hours - 12;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
}

    var minutes = 0;
    var seconds = 0;
    var tens = 0;
    var outputMinutes = document.getElementById('minut');
    var outputSeconds = document.getElementById('second');
    var outputTens = document.getElementById('tens');

    var btnStart = document.getElementById('button-start');
    var btnStop = document.getElementById('button-stop');
    var btnReset = document.getElementById('button-reset');

    var Interval;

    btnStart.addEventListener('click', () => {
        // ensure to stop timer
        clearInterval(Interval);
        Interval = setInterval(startTime, 10);
    });

    btnStop.addEventListener('click', () => {
        // stop timer
        clearInterval(Interval);
    });

    btnReset.addEventListener('click', () => {
        clearInterval(Interval);
        minutes = 0;
        tens = 0;
        seconds = 0;
        outputMinutes.innerHTML = "00";
        outputSeconds.innerHTML = "00";
        outputTens.innerHTML = "00";
    });

    function startTime(){
        tens++;
        if(tens <= 9){
            outputTens.innerHTML = "0" + tens;
        }
        if(tens >= 10){
            outputTens.innerHTML = tens;
        }
        if (tens > 99){
            seconds++;
            tens = 0;
            outputSeconds.innerHTML = "0" + seconds;
            outputTens.innerHTML = "0" + tens;
        }
        if(seconds >= 10){
            outputSeconds.innerHTML = seconds;
        }
        if (seconds > 59){
            minutes += 1;
            seconds = 0;
            tens = 0;
            outputMinutes.innerHTML = "0" + minutes;
            outputSeconds.innerHTML = "0" + seconds;
            outputTens.innerHTML = "0" + tens;
        }
        if (minutes >=10){
            outputMinutes.innerHTML = minutes;
        }
    }



// call this function after 0.01 sec
setInterval(displayTime, 10);
