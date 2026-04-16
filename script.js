const timeEl = document.getElementById("time");

function updateTime() {
  timeEl.textContent = Date.now();
}

updateTime();

// Optional: keep updating every second
setInterval(updateTime, 1000);