// explore.js

window.addEventListener('DOMContentLoaded', init);

var voices = [];

function addVoices() {
  var soundMenu = document.getElementById("voice-select");
  voices = speechSynthesis.getVoices();
  for (var i = 0; i < voices.length; i++) {
    var soundOption = document.createElement('option');
    soundOption.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if (voices[i].default) {
      soundOption.textContent += ' -- DEFAULT';
    }

    soundOption.setAttribute('data-lang', voices[i].lang);
    soundOption.setAttribute('data-name', voices[i].name);
    soundMenu.appendChild(soundOption);
  }
}

function closeSmile() {
  if (speechSynthesis.end) {
    var img = document.querySelector('img'); //main image
    img.src = 'assets/images/smiling.png';
  }
  // if (!speechSynthesis.speaking) {
  //   var img = document.querySelector('img'); //main image
  //   img.src = 'assets/images/smiling.png';
  // }
}


function init() {
  // TODO

  addVoices();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoices;
  }

  var button = document.querySelector('button')
  button.addEventListener("click", function () {


    var textBox = document.getElementById("text-to-speak");
    var voiceSelect = document.getElementById("voice-select");
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    if (voiceSelect.value == "select" || textBox.value == "") {
      return;
    }


    var utterance = new SpeechSynthesisUtterance(textBox.value);

    for (var i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    speechSynthesis.speak(utterance);
    if (speechSynthesis.speaking) {
      var img = document.querySelector('img'); //main image
      img.src = 'assets/images/smiling-open.png';
    }

    utterance.addEventListener('end', function () {
      img.src = 'assets/images/smiling.png';
    })

    // return closeSmile();
  });

}
