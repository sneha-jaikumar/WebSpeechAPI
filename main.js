// Create variables for HTML elements
var voice = document.getElementById("voice");
var placeholder = document.getElementById("placeholder");
var cake = document.getElementById("cake");
var pie = document.getElementById("pie");
var icecream = document.getElementById("icecream");

// Declare speech synthesis variable 
var synth = window.speechSynthesis;

// Given a word, speech synthesis will speak it 
function speak(word) {
    utterance = new SpeechSynthesisUtterance(word);
    utterance.pitch = 1.0;
    utterance.rate = 1.1;
    synth.speak(utterance);
}

// Speak cake and display it on page 
cake.onclick = function() {
    speak(cake.innerHTML);
    placeholder.innerHTML = "My favorite is: " + cake.innerHTML;
}

// Speak pie and display it on page 
pie.onclick = function() {
    speak(pie.innerHTML);
    placeholder.innerHTML = "My favorite is: " + pie.innerHTML;
}

// Speak ice cream and display it on page 
icecream.onclick = function() {
    speak(icecream.innerHTML);
    placeholder.innerHTML = "My favorite is: " + icecream.innerHTML;
}

// Declare recognition object 
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition();

// Adjust settings to recognize single English word
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-US';
recognition.maxAlternatives = 1;

// Start recognition when you click on the "tell us your favorite" button
voice.onclick = function() {
    recognition.start();
}

// When word is recognized, speak it and display it on page
recognition.onresult = function(event) {
    var favorite = event.results[0][0].transcript;
    speak(favorite);
    placeholder.innerHTML = "My favorite is: " + favorite;
}