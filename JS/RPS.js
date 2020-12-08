var rock = 0; 
var paper = 0;
var scissors = 0;
var Airock = 0; 
var Aipaper = 0;
var Aiscissors = 0;
var win = 0;
var tie = 0;
var lose = 0;

document.getElementById('win').value = win;
document.getElementById('tie').value = tie;
document.getElementById('lose').value = lose;

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
    var random = Math.floor(Math.random() * 3) + 1;
    if (random == 1){
        Airock = 1;
        Aipaper = 0;
        Aiscissors = 0;
    }
    if(random == 2){
        Airock = 0;
        Aipaper = 1;
        Aiscissors = 0;
    }
    if(random == 3){
        Airock = 0;
        Aipaper = 0;
        Aiscissors = 1;
    }
    if(rock == 1 && Aiscissors == 1){
        //win
        console.log("win");
        document.getElementById("status").innerHTML = "win";
        win += 1;
        document.getElementById('win').innerHTML = win;
    }else if(rock == 1 && Airock == 1){
        //tie
        console.log("tie");
        document.getElementById("status").innerHTML = "tie";
        tie += 1;
        document.getElementById('tie').innerHTML = tie;
    }else if (rock == 1 && Aipaper == 1){
        //lose
        console.log("lose");
        document.getElementById("status").innerHTML = "lose";
        lose += 1;
        document.getElementById('lose').innerHTML = lose;
    }else if(paper == 1 && Airock == 1){
        //win
        console.log("win");
        document.getElementById("status").innerHTML = "win";
        win += 1;
        document.getElementById('win').innerHTML = win;
    }else if(paper == 1 && Aipaper == 1){
        //tie
        console.log("tie");
        document.getElementById("status").innerHTML = "tie";
        tie += 1;
        document.getElementById('tie').innerHTML = tie;
    }else if(paper == 1 && Aiscissors == 1){
        //lose
        console.log("lose");
        document.getElementById("status").innerHTML = "lose";
        lose += 1;
        document.getElementById('lose').innerHTML = lose;
    }else if(scissors == 1 && Aipaper == 1){
        //win
        console.log("win");
        document.getElementById("status").innerHTML = "win";
        win += 1;
        document.getElementById('win').innerHTML = win;
    }else if(scissors == 1 && Aiscissors == 1){
        //tie
        console.log("tie");
        document.getElementById("status").innerHTML = "tie";
        tie += 1;
        document.getElementById('tie').innerHTML = tie;
    }else if(scissors == 1 && Airock == 1){
        //lose
        console.log("lose");
        document.getElementById("status").innerHTML = "lose";
        lose += 1;
        document.getElementById('lose').innerHTML = lose;
    }
}

