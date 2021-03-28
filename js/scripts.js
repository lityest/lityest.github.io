var app = document.getElementById('bannertext');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 20,
    deleteSpeed: 2
});

typewriter
    .pauseFor(1000)
    .typeString('Hi! I am, <strong>Rajinderpal Singh</strong>')
    .pauseFor(1000)
    .deleteChars(17)
    .typeString('<strong style="font-size: 23px;">Top Contributor</strong> of Winter of Code,2020')
    .pauseFor(1000)
    .deleteChars(38)
    .typeString('<strong style="font-size: 23px;">Project Admin</strong>/Mentor GSSOC\'21')
    .pauseFor(1000)
    .start();