const startingMinute = 10;
let time = startingMinute * 60;

const countDownEl = document.getElementById('countdown');

setInterval(updateCountdown, 5000);

function updateCountdown(){
    const minute = Math.floor(time/60);
    let seconds = time % 60;

    countDownEl.innerHTML = `${minute} H ${seconds}`;
    time--;
}