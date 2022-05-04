x = 0;
y = 0;
drawCircle = "";
drawRect = "";

function setup(){
    canvas = createCanvas(900, 600);
}

var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML = "system is listening. Please speak";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    if(content=="circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        drawCircle = "set";
    }

    if(content=="rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        drawRect = "set";
    }
}

function draw(){
    if(drawCircle == "set"){
        radius = Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        drawCircle = ""
    }

    if(drawRect == "set"){
        rect(x, y, 20, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        drawRect = ""
    }
}