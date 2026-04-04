const timer = (deadLine) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  
  const format = (num) => num.toString().padStart(2, "0");

  const getTimerRemaining = () => {
    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    if (timeRemaining < 0) {
      timeRemaining = 0;
    }

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimerRemaining();
    if (getTimerRemaining().timeRemaining <= 0) {
      clearInterval(interval);
      return;
    }

    timerHours.textContent = format(getTime.hours);
    timerMinutes.textContent = format(getTime.minutes);
    timerSeconds.textContent = format(getTime.seconds);
  };

  const interval = setInterval(updateClock, 1000);

  updateClock();
};

export default timer;
