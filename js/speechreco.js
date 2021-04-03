var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function runSpeechRecognition(output, logo) {
    var output = document.getElementById(output);
    recognition.onstart = function () {
        var c = 0;
        document.getElementById(logo).src = "images/listening.gif";
        document.getElementById(logo).style.height = "25px";
    };
    recognition.onspeechend = function () {

        document.getElementById(logo).src = "images/speechlogo.png";
        document.getElementById(logo).style.height = "25px";
        
        recognition.stop();
    }
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        output.value += transcript;
    };
    try {
        recognition.start();
    } catch (e) {
        recognition.stop();
        document.getElementById(logo).src = "images/speechlogo.png";
        document.getElementById(logo).style.height = "25px";
    }

}

function stoprecognition(output2, input2, logo2) {
    recognition.stop();
    var output2 = document.getElementById(output2);
    var action2 = document.getElementById(input2);
    output2.value = "";
    input2.value = "";
    document.getElementById(logo2).src = "images/speechlogo.png";
}
