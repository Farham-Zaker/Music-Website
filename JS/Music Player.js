// Changing the icone of play by clicking
const playBtns = document.querySelectorAll(".music-player .play-btn");

playBtns.forEach((playBtn) =>{
  playBtn.addEventListener('click' , () =>{
    let audio = playBtn.parentElement.previousElementSibling;
    let icone = playBtn.firstElementChild;
    if (icone.classList[1] == "fa-play") {
      icone.classList.replace("fa-play", "fa-pause");
      audio.play()
    } else if (icone.classList[1] == "fa-pause") {
      icone.classList.replace("fa-pause", "fa-play");
      audio.pause();
    }
  })
})


// To reset the song by clicking on stop button
const stopBtns = document.querySelectorAll('.music-player .stop-btn');
stopBtns.forEach((stopBtn) =>{
  stopBtn.addEventListener('click' , () =>{
    let audio = stopBtn.parentElement.previousElementSibling;
    let stopIcone = stopBtn.parentElement.firstElementChild.firstElementChild;
    let progress = stopBtn.parentElement.nextElementSibling.firstElementChild.nextElementSibling;


    audio.pause()
    audio.currentTime = 0
    stopIcone.classList.replace("fa-pause", "fa-play");
    progress.value = 0
    // Filling the progress input by setting by background gradient 
    progress.style.background = `linear-gradient(to right , #a50000 ${progress.value * 100 / progress.max}% , #323232 ${progress.value - progress.max}%)`;
  })
})

const audios = document.querySelectorAll('audio');

audios.forEach((audio) =>{
  audio.addEventListener('timeupdate' , (e) =>{
    let runningTime = audio.nextElementSibling.nextElementSibling.firstElementChild;
    let fullTime = audio.nextElementSibling.nextElementSibling.lastElementChild;
    
    // Determinding the start time and end time
    let current = e.target.currentTime;
    let duration = e.target.duration;
    
    let startSecond = Math.floor(current / 60);
    let startMinute = Math.floor(current % 60);
    
    let endSecond = Math.floor(duration / 60);
    let endMinute = Math.floor(duration % 60);
    
    runningTime.innerHTML = order(startSecond) + ":" + order(startMinute);
    fullTime.innerHTML = order(endSecond) + ":" + order(endMinute);
    
    function order(number) {
      if (number < 10) {
        return `0${number}`;
      } else {
        return number;
      }
    }



    let progress = audio.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
    let playBtn = audio.nextElementSibling.firstElementChild.firstElementChild;

    // Equal the max of input to duration of audio
    progress.max = audio.duration

    // To sinchronize progress input with running time
    progress.value = audio.currentTime;

    if (audio.currentTime == audio.duration) {
      
      runningTime.innerHTML = '00:00'

      playBtn.classList.replace('fa-pause' , 'fa-play')

      progress.value = 0;

      progress.style.background = `linear-gradient(to right , #a50000 ${progress.value * 100 / progress.max}% , #323232 ${progress.value - progress.max}%)`;


    }
    
  })
})

const progressInputs = document.querySelectorAll('.music-player .control .progress');

progressInputs.forEach((progress) =>{
  progress.value = 0
  progress.addEventListener('input' , () =>{
    let audio = progress.parentElement.previousElementSibling.previousElementSibling;
    
    audio.currentTime = progress.value;

    
    progress.style.background = `linear-gradient(to right , #a50000 ${progress.value * 100 / progress.max}% , #323232 ${progress.value - progress.max}%)`;
  })
  // Detecting browser to apply style of thumb of input
     
  if(navigator.userAgent.match(/firefox|fxios/i)){
    progress.classList.add('firefox')
  }
  else{
    progress.classList.add('other-browsers')
  }


})

