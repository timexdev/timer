var [seconds, minutes] = [0, 5]
let displayTime = document.getElementById('displayTime');
let timer = null;

function watch(){
    seconds--;
    if(seconds < 0){
        seconds = 59;
        minutes--;
        if(minutes < 0){
            minutes = 0;
            clearInterval(timer)
            seconds = 0;
        }
    }

    
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = min +"m:"+ sec + "s";
}

function start(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(watch, 1000);
}

function  stop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    [minutes, seconds] = [5, 0];
    displayTime.innerHTML = "05m:00s";
}





// var timer;
// var timer1;
// var timer2;

//     function start(){
//         timer1 = setInterval(sec, 1000);
//         timer2 = setInterval(min, 60000);
//         document.getElementById('minutes').innerHTML = 4;
//         document.getElementById('seconds').innerHTML = 59;
//     }

//     function sec(){
//         let secs = Number(document.getElementById('seconds').innerHTML);
//         secs --;
//         if(secs < 0){
//             secs = 59;
//         }
//         if(secs < 10){
//             secs = "0" + secs; 
//         }
//         document.getElementById('seconds').innerHTML = secs;  
//     }

//     function min(){
//         let mins = Number(document.getElementById('minutes').innerHTML);
//         mins --;
//         if(mins < 0){
//             mins = 0;
//             clearInterval(timer1);
//             document.getElementById('seconds').innerHTML = "00";
//         }
//         document.getElementById('minutes').innerHTML = "0" + mins; 
//     }

// // function that will be executed on click of the stop button
//     function stop(){
//         clearInterval(timer1)
//         clearInterval(timer2)
//     }
// // function that will be executed on click of the reset button
//     function reset(){
//         document.getElementById('seconds').innerHTML = "00";
//         document.getElementById('minutes').innerHTML = "05";
//         clearInterval(timer1)
//         clearInterval(timer2)
//     }

