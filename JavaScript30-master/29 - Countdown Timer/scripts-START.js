
  let countdown:
  
  
  
  
  function timer(seconds){
  const now = Date.now()
  const then = now + seconds*1000;
  
  setInterval(() => {
    const secondsLeft = (then - Date.now()) / 1000;
    // check if we should stop it
    if (secondsLeft <= 0){
      return;
    }
    //display it
    console.log(secondsLeft);
  } , 1000)}