var timer;
var timer1;
var timer2;

    function start(){
        timer1 = setInterval(sec, 1000);
        timer2 = setInterval(min, 60000);
        document.getElementById('minutes').innerHTML = 4;
        document.getElementById('seconds').innerHTML = 59;
    }

    function sec(){
        let secs = Number(document.getElementById('seconds').innerHTML);
        secs --;
        if(secs < 0){
            secs = 59;
        }
        if(secs < 10){
            secs = "0" + secs; 
        }
        document.getElementById('seconds').innerHTML = secs;  
    }

    function min(){
        let mins = Number(document.getElementById('minutes').innerHTML);
        mins --;
        if(mins < 0){
            mins = 0;
            clearInterval(timer1);
            document.getElementById('seconds').innerHTML = "00";
        }
        document.getElementById('minutes').innerHTML = "0" + mins; 
    }

// function that will be executed on click of the stop button
    function stop(){
        clearInterval(timer1)
        clearInterval(timer2)
    }
// function that will be executed on click of the reset button
    function reset(){
        document.getElementById('seconds').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "05";
        clearInterval(timer1)
        clearInterval(timer2)
    }