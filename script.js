//IIFE (function () {CODE})();
//IIFE for date
(function () {
  let selectDate = document.querySelector(".date");

  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  //template literals - string literals that allows embedded expressions.
  selectDate.innerHTML = `${month}/${day}/${year}`;
})();

//declare time counters
let secondsCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;

//time function
function time() {
  let selectTime = document.querySelector(".time");
  let selectSecondHand = document.querySelector(".sec");
  let selectMinuteHand = document.querySelector(".min");
  let selectHourHand = document.querySelector(".hour");

  const date2 = new Date();
  
  let hour = date2.getHours();
  const min = date2.getMinutes();
  const sec = date2.getSeconds();
  let AMorPM = "AM";

  //correct hour if hour > 12
  if(hour > 12) {
    hour -= 12;
    AMorPM = "PM";
  }

  //correct minutes and seconds if the number ends in 0
  if (min < 10 && sec < 10) {
    selectTime.innerHTML = `${hour}:0${min}:0${sec} ${AMorPM}`;
  }
  else if (sec < 10) {
    selectTime.innerHTML = `${hour}:${min}:0${sec} ${AMorPM}`;
  }
  else if (min < 10) {
    selectTime.innerHTML = `${hour}:0${min}:${sec} ${AMorPM}`;
  }
  else {
    selectTime.innerHTML = `${hour}:${min}:${sec} ${AMorPM}`;
  }


  /* rotating clock hands based on the time */

  // 1 sec = 6 degrees
  let seconds = sec * 6;

  // sets secoundsCounter to the degrees based on seconds
  if (secondsCounter < 354) {
  secondsCounter = seconds;
  }
  // adds 6 degrees just before the first full rotation. 360 degrees, 366 degrees...
  else {
    secondsCounter += 6;
  }
  
  selectSecondHand.style.transform = `rotate(${secondsCounter}deg)`;



  //1 min = 6 degrees
  let minutes = min * 6;

  if (minutesCounter < 354) {
    minutesCounter = minutes;
  }
  else {
    minutesCounter += 6;
  }
  
  selectMinuteHand.style.transform = `rotate(${minutesCounter}deg)`;

  // For every hour, the hour hand will move 30 degrees. Then for every minute, the hour hand will move .5 degrees because .5 degrees = 1 minutes which equals 30 degrees (60 minutes = 1 hour)
  let hours = (hour * 30) + (min * .5);
  hoursCounter = hours;
  selectHourHand.style.transform = `rotate(${hoursCounter}deg)`;

  // console.log("secondsCounter: " + secondsCounter);
  // console.log("minutes: " + minutesCounter);
  // console.log("hours: " + hoursCounter);
};

// sets the initial time 
time();
// continues the time
setInterval(time, 1000);
