const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

const switcher = document.getElementById('theme-switcher');

switcher.addEventListener('click', function() {
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute('data-theme'),
    newTheme

  newTheme = (dataTheme === 'light') ? 'dark' : 'light';
  
  rootElem.setAttribute('data-theme', newTheme);
})


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

  let s = leftTime;

  const h = Math.floor(s / 3600);
  s = s - (h * 3600);
  const m = Math.floor(s/ 60);
  s = s - (m * 60);

  hours.value = h;
  minutes.value = m;
  seconds.value = s;
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
    //Если StartTimer = 1, мы выходим из функции и дальше код не идет. 
    return;
  }

  //Если же StartTimer = 0 or undefined or null то тогда срабатывает код ниже

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

