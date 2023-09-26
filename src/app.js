const pomodoroBtn = document.getElementById("Pomodoro");
const shortBtn = document.getElementById("Short");
const longBtn = document.getElementById("Long");
const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const timeElm = document.querySelector("#time");
let countDown;
let isPaused = false



function startTimer(mins, secs){
  let totalSeconds = mins * 60 + secs;

  countDown = setInterval(()=>{
    if(!isPaused){
      if(totalSeconds<=0){
        clearInterval(countDown);
        startBtn.innerText = "Start";
        restartBtn.style.display = "block";
      }else{
        const displayMins = Math.floor(totalSeconds/60);
        const displaySecs = totalSeconds % 60;
        timeElm.innerText = `${displayMins}:${displaySecs < 10 ? '0' : ''}${displaySecs}`;
        totalSeconds--;
      }
    }
  }, 1000);
}

longBtn.addEventListener("click", () => {
  document.body.style.background = "rgb(56, 133, 138)";
  timeElm.innerText = "15:00";
  startBtn.innerText = "Start"
  restartBtn.style.display = "none"
  isPaused = false;
  clearInterval(countDown);
});

shortBtn.addEventListener("click", () => {
  document.body.style.background = "#397097";
  timeElm.innerText = "5:00";
  startBtn.innerText = "Start";
  restartBtn.style.display = "none";
  isPaused = false;
  clearInterval(countDown);
});

pomodoroBtn.addEventListener("click", () => {
  document.body.style.background = "#ba4949";
  timeElm.innerText = "25:00";
  startBtn.innerText = "Start";
  restartBtn.style.display = "none";
  isPaused = false;
  clearInterval(countDown);
});

startBtn.addEventListener("click", () =>{
  if(startBtn.innerText = "Start"){
    startBtn.innerText = "Pause";
    isPaused = false;
    const [mins , secs] = timeElm.innerText.split(":").map(Number);
    startTimer(mins, secs);
  }else if(startBtn.innerText = "Pause"){
    startBtn.innerText = "Res";
    isPaused = true;
  }else if(startBtn.innerText = "Res"){
    startBtn.innerText = "Pause";
    isPaused = false;
    const [mins, secs] = timeElm.innerText.split(":").mao(Number);
    startTimer(mins, secs);
  }
})

restartBtn.addEventListener("click", () => {
  const [mins, secs] = timeElm.innerText.split(":").map(Number);
  startTimer(mins, secs);
  startBtn.innerText = "Pause";
  restartBtn.style.display = "none";
  isPaused = false;
});


const se="";