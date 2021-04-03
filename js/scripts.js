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

var lityestapp = document.getElementById('lityesttype');

var typewriterlityest = new Typewriter(lityestapp, {
    loop: true,
    delay: 20,
    deleteSpeed: 3
});

typewriterlityest
    .typeString('@lityest')
    .pauseFor(2000)
    .deleteChars(7)
    .pauseFor(1000)
    .start();



    var appyoutube = document.querySelector('.ytdescription');

    var typewriteryoutube = new Typewriter(appyoutube, {
        loop: false,
        delay: 30,
        deleteSpeed: 2
    });
    
    typewriteryoutube
        .pauseFor(1000)
        .typeString("<strong>Lityest brand</strong> as the name suggests depicts the inner fire in our community to grind for success. Its origin comes from persona<strong>LITY</strong> & inter<strong>EST</strong>. Its an initiative to help the society  by providing them educational content in entertainment form, which youth in this era love to consume . We aren't just Lit (also means excellent) we are  The LITYEST .So Bring that fire in you To be excellent and lets reach the peaks of success together.")
        .start();
    