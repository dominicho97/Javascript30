
  let countdown;
  const timerDisplay = document.querySelector('.display__time-left');//timer van HTML
  
  
  
  
  function timer(seconds){
  const now = Date.now()
  const then = now + seconds*1000;
  displayTimeLeft(seconds);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it
    if (secondsLeft < 0){
      clearInterval(countdown);
      return;
    }
    //display it
    displayTimeLeft(secondsLeft);
  } , 1000)}


  function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}: ${remainderSeconds < 10 ? '0': "" }${remainderSeconds}`; // wat toont de display?
  document.title = display; // zorgt dat de titel vs webpagina ook een timer is
  timerDisplay.textContent = display;         // div van HTML
    
  }

  function displayEndTime(timeStamp){
    const end = new Date(timeStamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTime = document.querySelector('.display__time-left');
    endTime.textContent = `Be back at ${hour}:${minutes}`;
  }