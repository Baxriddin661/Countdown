// Call dom element
const days = document.querySelector('#days');
const hours = document.querySelector('#hour');
const minutes = document.querySelector('#minute');
const seconds = document.querySelector('#second');
const countdown = document.querySelector('#countdown');
const loading = document.querySelector('#loading');
const year = document.querySelector('#year');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`january 14 ${currentYear} 00:00:00`);
year.innerHTML = currentYear;

function updateCountDown(){
    const currentTime = new Date();
    const diff = newYearTime-currentTime;
    const d = Math.floor( diff / 1000 / 60 / 60 / 24);
    const h = Math.floor( diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor( diff / 1000 / 60 ) % 60;
    const s = Math.floor( diff / 1000 ) % 60;

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

setInterval(updateCountDown, 1000);
setTimeout(function(){
    loading.remove();
    countdown.style.display = "flex";
}, 2000);