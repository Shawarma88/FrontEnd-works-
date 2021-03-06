
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const newYear = "1 Jan 2021"


function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date()

    const trippDate = (newYearDate - currentDate)
    const totalSecs = trippDate / 1000
    
    const months = Math.floor(totalSecs / 2.628e+6);
    const days = Math.floor(totalSecs / 86400);
    const hours = Math.floor(totalSecs / 3600) % 24;
    const minutes = Math.floor(totalSecs / 60) % 60;
    const seconds = Math.floor(totalSecs ) % 60 ;
    
    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;



}
countdown()
setInterval(countdown, 1000)