const pomodoroBtn = document.getElementById("Pomodoro");
const shortBtn = document.getElementById("Short");
const longBtn = document.getElementById("Long");
const startBtn = document.getElementById("start");
const timeElm = document.querySelector("#time");

let timerInterval; // Variable to hold the timer interval

const startTimer = (minutes, seconds) => {
  clearInterval(timerInterval); // Clear any existing timer interval

  let totalSeconds = minutes * 60 + seconds;

  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      return;
    }

    const formattedMinutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const formattedSeconds = (totalSeconds % 60).toString().padStart(2, "0");

    timeElm.innerText = `${formattedMinutes}:${formattedSeconds}`;
    totalSeconds--;
  }, 1000);
};

longBtn.addEventListener("click", () => {
  document.body.style.background = "rgb(56, 133, 138)";
  timeElm.innerText = "15:00";
  const [minutes, seconds] = timeElm.innerText.split(":").map(Number);
  startTimer(minutes, seconds);
});

shortBtn.addEventListener("click", () => {
  document.body.style.background = "#397097";
  timeElm.innerText = "5:00";
  const [minutes, seconds] = timeElm.innerText.split(":").map(Number);
  startTimer(minutes, seconds);
});

pomodoroBtn.addEventListener("click", () => {
  document.body.style.background = "#ba4949";
  timeElm.innerText = "25:00";
  const [minutes, seconds] = timeElm.innerText.split(":").map(Number);
  startTimer(minutes, seconds);
});