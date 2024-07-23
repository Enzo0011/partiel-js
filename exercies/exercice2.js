const timer = document.getElementById("timer");
let seconds = 0;
const updateTimer = () => {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    timer.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
updateTimer();
setInterval(() => {
    seconds++;
    updateTimer();
}, 1000);