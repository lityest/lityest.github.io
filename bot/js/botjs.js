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
    var botmessage = "";
    var inputs = [
        ["Hi! How can I help?", "hi", "hello", "help"],
        ["we aren't lit we are lityest", "tagline"],
        ["founders are Priyanshu  and Rajinder", "founder"],
        ["team members are Priyanshu,Rajinder and Divyanshu", "team", "members"],
        ["code of website was written by Priyanshu and Rajinder ", "coder", "coders"],
        ["media was designed by Divyanshu and Priyanshu", "designer", "designers"],
        ["To provide Education along with Entertainment", "aim"],
        ["Hi boss", "priyanshu", "rajinder", "divyanshu"],
        ["yes its me", "lityest", "bot"],
        ["lityest@gmail.com", "email", "contact", "call", "mail", "reach", "address", "map"],
    ];

    for (j of inputs) {
        if (check(value, j)) {
            botmessage += "<span class='botsender'>" + j[0] + "</span><br><br>";
            break;
        }
    }
    if (botmessage == "") {
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