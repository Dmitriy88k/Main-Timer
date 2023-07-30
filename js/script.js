const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let startTimer;
let leftTime;


function timer() {
  hours.disabled = true;
  minutes.disabled = true;
  seconds.disabled = true;

  leftTime--;

  if(leftTime === 0) {
    resetTimer();
  }

  else if(seconds.value != 0) {
    seconds.value--;
  }

  else if(minutes.value != 0 && seconds.value == 0) {
    minutes.value--;
    seconds.value = 59;
  }

  else if(hours.value != 0 && minutes.value == 0 && seconds.value == 0) {
    hours.value--;
    minutes.value = 59;
    seconds.value = 59;
  }
  return;
}

function calculateLeftTime() {
  const h = Number(hours.value);
  const m = Number(minutes.value);
  const s = Number(seconds.value);

  return s + (m * 60) + (h * 60 * 60);
}


function resetTimer() {
  clearInterval(startTimer);
  startTimer = 0;

  hours.value = "";
  minutes.value = "";
  seconds.value = "";
  
  hours.disabled = false;
  minutes.disabled = false;
  seconds.disabled = false;
}



//Buttons 

startBtn.addEventListener('click', function() {
  if (startTimer) {
    return;
  }

  leftTime = calculateLeftTime();

  if(leftTime === 0) {
    alert("Please put a value");
  }

  else if(Number(hours.value) < 0 || Number(minutes.value)< 0 || Number(seconds.value) < 0) {
    alert("The Value Must Be Positive");
    clearInterval(startTimer);
    return;
  }

  
  startTimer = setInterval(function() {
    timer();
  },1000)

})

pauseBtn.addEventListener('click', function() {
  clearInterval(startTimer);
  startTimer = 0;

})

resetBtn.addEventListener('click', function() {
  resetTimer();
})
