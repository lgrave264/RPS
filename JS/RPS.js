var rock = 0; 
var paper = 0;
var scissors = 0;

function crock(){
    rock = 1; 
    paper = 0;
    scissors = 0;
    document.getElementById("imgrock").style.backgroundColor = "white";
    document.getElementById("imgpaper").style.backgroundColor = "";
    document.getElementById("imgscissors").style.backgroundColor = "";
}
function cpaper(){
    rock = 0; 
    paper = 1;
    scissors = 0;
    document.getElementById("imgrock").style.backgroundColor = "";
    document.getElementById("imgpaper").style.backgroundColor = "white";
    document.getElementById("imgscissors").style.backgroundColor = "";
}

function cscissors(){
    rock = 0; 
    paper = 0;
    scissors = 1;
    document.getElementById("imgrock").style.backgroundColor = "";
    document.getElementById("imgpaper").style.backgroundColor = "";
    document.getElementById("imgscissors").style.backgroundColor = "white";
}


function RPS(){
    let random = (Math.random() * 3) + 1;
    if (random == 1){
        rock = 1;
    }
    if(random == 2){
        paper = 1;
    }
    if(random == 3){
        scissors = 1;
    }
}
