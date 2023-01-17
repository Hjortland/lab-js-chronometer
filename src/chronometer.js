class Chronometer {
  constructor() {
this.currentTime = 0; 
this.intervalId = null; 
}

start(printTimeCallback) {

  this.intervalId = setInterval(() => {
    this.currentTime++
    if(printTimeCallback){
      printTimeCallback()
    }
  }, 1000)
}


  getMinutes() {return Math.floor(this.currentTime / 60);}

  getSeconds() {return this.currentTime % 60;}

  computeTwoDigitNumber(value) {return ("0" + value).slice(-2);}

  stop() {clearInterval(this.intervalId);}    

  reset() {return this.currentTime = 0;}

  split() {
const min = this.computeTwoDigitNumber(this.getMinutes());
const sec = this.computeTwoDigitNumber(this.getSeconds());
const ms = this.computeTwoDigitNumber(this.getMilliseconds()); 
return `${min}:${sec}:${ms}`
  }
}

// Bonus iteration 9 centiseconds

const splits = document.getElementById('splits');

function displayTime() {
  displayMinutes();
  displaySeconds(); 
  displayMilliseconds(); 
}

function displayMinutes () {
  minDecElement.innerText = 
chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerText =
chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}


function displaySeconds () {
  secDecElement.innerText = 
chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]; 
  sexUniElement.innerText = 
chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

function displayMilliseconds () {
  msDecElement.innerHTML = 
chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
  msUniElement.innerHTML =
chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1]; 
}

