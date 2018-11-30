// Get our elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player-slider');







//Build our functions

function togglePlay(){ // als video=pauze-> afspelen of anders pauzeren
  if (video.paused){
    video.play(); 
  } else {
    video.pause();
  }
  }

function updateButton(){
  console.log('update the button');
}


/* Hook up event listeners*/

video.addEventListener('click',togglePlay );
video.addEventListener('play',updateButton );
video.addEventListener('pause',updateButton );

toggle.addEventListener('click',togglePlay );

