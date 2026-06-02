const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const releaseTime = new Date("Jun 5, 2026 12:00:00").getTime();

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
  dayEl.innerHTML = d.toString;
  hourEl.innerHTML = h.toString;
  minuteEl.innerHTML = m.toString;
  secondEl.innerHTML = s.toString;
  setTimeout(updateCountdown, 1000)
}

updateCountdown();

function copyText() {
  // Get the text field
  var copyText = document.getElementById("myInput");
  var link = "https://elskeptico.github.io/zombieapoc/modpack.mrpack";

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(link);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}