// Greeting Button

let greetButton = document.getElementById("greetBtn");

greetButton.onclick = function(){

    let name = document.getElementById("username").value;

    if(name==""){

        document.getElementById("heading").innerHTML = "Hello";

    }
    else{

        document.getElementById("heading").innerHTML = "Hello, " + name;

    }

};


// Color Boxes

let red = document.getElementById("redBox");

red.onclick = function(){

    red.style.backgroundColor = "red";
    red.style.color = "white";

};


let blue = document.getElementById("blueBox");

blue.onclick = function(){

    blue.style.backgroundColor = "blue";
    blue.style.color = "white";

};


let green = document.getElementById("greenBox");

green.onclick = function(){

    green.style.backgroundColor = "green";
    green.style.color = "white";

};


let yellow = document.getElementById("yellowBox");

yellow.onclick = function(){

    yellow.style.backgroundColor = "yellow";
    yellow.style.color = "black";

};