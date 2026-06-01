const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const releaseTime = new Date("Jun 5, 2026 12:00:00").getTime();



const dialog = document.getElementById('playtesters');
document.getElementById('opentesters').onclick = () => dialog.showModal();
document.getElementById('close').onclick = () => dialog.close();



function updateCountdown() {
  const now = new Date().getTime();
  const gap = releaseTime - now;
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  dayEl.innerHTML = d;
  hourEl.innerHTML = h;
  minuteEl.innerHTML = m;
  secondEl.innerHTML = s;
  setTimeout(updateCountdown, 1000)
}

updateCountdown();
