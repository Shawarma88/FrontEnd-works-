const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const frankMarriage = "28 december 2020";



function countDown () 
{
    const trippDate = new Date(frankMarriage);
    const currentDate = new Date();
    const totalSeconds = (trippDate - currentDate)/1000;

   const months = Math.floor(totalSeconds / 2.628e+6)
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
  
}

countDown()
setInterval(countDown, 1000)