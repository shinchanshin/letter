function open_card() {
  document.getElementById('front').className = 'open-card';
}

function close_card() {
  document.getElementById('front').className = '';
  stopBackgroundMusic();
}

function playBackgroundMusic() {
  var audio = document.getElementById("backgroundMusic");
  audio.play();
}

function stopBackgroundMusic() {
  var audio = document.getElementById("backgroundMusic");
  audio.pause();
  audio.currentTime = 0;
}

var frontButton = document.getElementById("front");
frontButton.addEventListener("click", function() {
  var frontElement = document.getElementById('front');
  if (frontElement.classList.contains('open-card')) {
    close_card();
  } else {
    open_card();
    playBackgroundMusic();
  }
}, false);
