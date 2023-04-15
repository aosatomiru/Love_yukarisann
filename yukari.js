SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "ja";
recognition.onresult = (event) => {
  alert(event.results[0][0].transcript);
}

recognition.start();

console.log("aiueo");