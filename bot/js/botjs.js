function showhidebot() {
    $('#chatbox').fadeToggle();
}

$("#senderinput").on("keydown", function (e) {
    if (e.keyCode === 13) {
        send('senderinput', 'messagebox');
    }
});
function send(inputid, outputid) {
    var val = document.getElementById(inputid).value;
    if (val != '') {
        document.getElementById(outputid).innerHTML += "<span class='sender'>" + val + "</span><br>";
        bot(val, outputid);
    }
}

function bot(value, outputid) {
    var botmessage = "lityest helper <br> ";
    var inputs = [
        ["Hi! How can I help?", "hi", "hello"],
        ["Did I forgot to introduce myself?<br> I am lityest helper", "name"],
        ["We aren't lit we are Lityest", "tagline"],
        ["Founders are Priyanshu  and Rajinderpal", "founder","founders","head"],
        ["Team members are Priyanshu,Rajinderpal and Divanshu", "team", "members","creator"],
        ["Coded by Priyanshu and Rajinderpal ", "coder", "coders","programmer"],
        ["Media was designed by Divanshu and Priyanshu", "designer", "designers"],
        ["To provide Education along with Entertainment", "aim","target"],
        ["here we go !!","start"],
        ["Happy to help", "good", "nice"],
        ["I don't have a gender", "gender","male or female"],
        ["Welcome", "thank you"],
        ["i did that question today ......20 ","10+10"],
        ["say hi , ask about coders , ask my aim . Start a conversation","what"],
        ["Hi boss", "priyanshu","priyanshuthe1", "rajinderpal", "divanshu","sairish"],
        ["Yes it's me, lityest", "lityest", "bot","you"],
        ["Have a nice day", "bye"],
        ["<a href='mailto:lityest@gmail.com'>lityest@gmail.com</a>", "email", "contact", "call", "mail", "reach", "address", "map", "helpline"],
    ];

    for (j of inputs) {
        if (check(value, j)) {
            botmessage += "<span class='botsender'>" + j[0] + "</span><br><br>";
            break;
        }
    }
    if (botmessage == "lityest helper <br> ") {
        botmessage += "<span class='botsender'>Sorry! can't Understand</span><br><br>";
    }
    document.getElementById(outputid).innerHTML += botmessage;
    document.getElementById(outputid).scrollTop = document.getElementById(outputid).scrollHeight;
    document.getElementById("senderinput").value = '';
}

function check(value, chkvalar) {
    value = value.toLowerCase();
    var ar = value.split(' ');
    for (i of chkvalar) {
        if (ar.includes(i)) {
            return true;
        }
    }
    return false;
}
