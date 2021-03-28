var app = document.getElementById('brandlogo');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 20,
    deleteSpeed: 2
});

typewriter
    .pauseFor(1000)
    .typeString('Lityest')
    .pauseFor(2000)
    .deleteChars(7)
    // .typeString('Persona<strong>lity</strong> + Inter<strong>est</strong>')
    // .pauseFor(1000)
    // .deleteChars(22)
    .typeString('Initiative to help Society')
    .pauseFor(1000)
    .start();

