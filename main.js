let [ milseconds, seconds, minutes, hours ] = [0,0,0,0];
   let display = document.querySelector('.display')
let stopwatch = null;

const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')

start.addEventListener('click', () => {
    if(stopwatch!==null){
        clearInterval(stopwatch)
    }
    stopwatch = setInterval(startButton, 10);
})

pause.addEventListener('click', () => {
    clearInterval(stopwatch)
})

reset.addEventListener('click', () => {
    [ seconds, minutes, hours ] = [0, 0, 0]
    document.querySelector('.display').innerHTML = '00 : 00 : 00 : 00'
    clearInterval(stopwatch)
})

function startButton(){
    milseconds+=1
    if (milseconds == 100) {
        milseconds = 0
        seconds++

        if(seconds == 60){
            seconds = 0
            minutes++
    
            if(minutes == 60){
                minutes = 0
                hours++
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    let ms = milseconds < 10 ? "0" + milseconds : milseconds

    display.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`
}