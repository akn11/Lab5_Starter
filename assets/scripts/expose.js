// expose.js

window.addEventListener('DOMContentLoaded', init);
var jsConfetti = new JSConfetti();
function init() {
  // TODO



  //----------------------------------------------------------------------------
  var elem = document.getElementById("horn-select"); //change picture and sound
  elem.addEventListener("change", function () {
    var text = elem.options[elem.selectedIndex].text;
    // alert(text);

    var img = document.querySelector('img'); //main image
    var sound = document.getElementsByClassName("hidden"); //sound

    if (text == "Air Horn") {
      img.src = 'assets/images/air-horn.svg';
      sound.src = 'assets/audio/air-horn.mp3';
      // alert(sound.src);
    }
    else if (text == "Car Horn") {
      img.src = 'assets/images/car-horn.svg';
      sound.src = 'assets/audio/car-horn.mp3';
    }
    else if (text == "Party Horn") {
      img.src = 'assets/images/party-horn.svg';
      sound.src = 'assets/audio/party-horn.mp3';
    }
    else {
      img.src = 'assets/images/no-image.png';
      sound.src = '';
    }
  });

  //----------------------------------------------------------------------------
  var soundButton = document.querySelector('button'); //play the sound
  soundButton.addEventListener("click", function () {
    var sound = document.getElementsByClassName("hidden");
    var audio = new Audio(sound.src);
    audio.volume = document.getElementById("volume").value / 100;
    if (audio.volume == 0) {
      return;
    }
    if (document.getElementById("horn-select").options[elem.selectedIndex].text == "Party Horn") {
      jsConfetti.addConfetti();
      audio.play();
    }
    else {
      audio.play();
    }
  })


  //----------------------------------------------------------------------------
  var slider = document.getElementById("volume"); //change sound icon
  slider.addEventListener("change", function () {
    var volCont = document.getElementById("volume-controls");
    var speakerImg = volCont.querySelector('img');
    if (slider.value == 0) {
      speakerImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if (slider.value > 0 && slider.value < 34) {
      speakerImg.src = 'assets/icons/volume-level-1.svg';
    }
    else if (slider.value > 33 && slider.value < 67) {
      speakerImg.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      speakerImg.src = 'assets/icons/volume-level-3.svg';
    }
  })



}
