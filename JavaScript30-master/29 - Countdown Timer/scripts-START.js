
  let countdown;
  const timerDisplay = document.querySelector('.display__time-left');//timer van HTML
  const endTime = document.querySelector('.disgitplay__end-time');
  const buttons = document.querySelectorAll('[data-time]');
  
  
  
  function timer(seconds){
  const now = Date.now()
  const then = now + seconds*1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  
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
    const hour = end.getHours();
    const minutes = end.getMinutes();
    
    endTime.textContent = `Be back at ${hour}:${minutes}`;
  }

  function startTimer(){
    console.log(this);
  }

  buttons.forEach(button => button.addEventListener('click', startTimer));