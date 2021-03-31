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


(function(){

    var button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper'),
        overlay = document.getElementById('cn-overlay');

    //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);
    wrapper.addEventListener('click', cnhandle, false);

    function cnhandle(e){
        e.stopPropagation();
    }

    function handler(e){
        if (!e) var e = window.event;
        e.stopPropagation();//so that it doesn't trigger click event on document

        if(!open){
            openNav();
        }
        else{
            closeNav();
        }
    }
    function openNav(){
        open = true;
        button.innerHTML = "-";
        classie.add(overlay, 'on-overlay');
        classie.add(wrapper, 'opened-nav');
    }
    function closeNav(){
        open = false;
        button.innerHTML = "+";
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper, 'opened-nav');
    }
    document.addEventListener('click', closeNav);
})();

