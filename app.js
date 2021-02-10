var riddles = ["If I drink, I die. If I eat, I am fine. What am I?","Cloud is my mother. Wind is my father. I come down but never go up. What am I?","Tear off my skin.I won't cry,but you will. What am I?"]
var riddleAnswers = ["FIRE","RAIN","ONION"]
var index = 0;

function getRiddle(){
    var rid = document.getElementById("riddle");
    rid.innerHTML = riddles[index];
    
    }
function checkAnswer(){
    let answer = document.getElementById("answer");
    if(answer == riddleAnswers[index]){
        return true;
    }else{
        return false;
    }
}

function get(){
    for(let i = 0;i < riddles.length;i++){

    }
}
