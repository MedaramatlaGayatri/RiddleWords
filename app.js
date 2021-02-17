var riddles = ["If I drink, I die. If I eat, I am fine. What am I?","Cloud is my mother. Wind is my father. I come down but never go up. What am I?","Tear off my skin.I won't cry,but you will. What am I?","What color can you eat?","What body part is pronounced as one letter,but written with three, only two different letters are used?","You are my brother, but I am not your brother.","I shrink smaller every time I take a bath.","I sleep by day, I fly by night. I have no feathers to aid my flight.","I am an insect. Half of my name is another insect. I am similar to the name of a famous band","I belong to you but others use me more often than you do","I am an odd number.take away one letter and I become even. What number am I?","Which word in the dictionary is spelled incorrectly?"];
//var index = 0;
var ans = "";
var riddleAnswers = ["FIRE","RAIN","ONION","ORANGE","EYE","SISTER","SOAP","BAT","BEETLE","NAME","SEVEN","INCORRECTLY"];
function getQuestion(){
  let x =parseInt(localStorage.getItem("indexKey"));
    return  riddles[x]; 
}
function incrementIndex() {
  localStorage.setItem("indexKey",(parseInt(localStorage.getItem("indexKey"))+1).toString(10));
}
function getIndex(){
  let index = parseInt(localStorage.getItem("indexKey"));
    return index;
}
  function homePage(){
    location.replace("home.html");
  }
  function updateKey(){
    localStorage.setItem("keyName",(parseInt(localStorage.getItem("keyName"))+1).toString(10));
  }
  function getLevel(){
    return "Level "+localStorage.getItem("keyName");
  }
  function getwordIndex(){
    alert(localStorage.getItem("wordindexkey"));
    return localStorage.setItem("wordindexkey");
  }
  function incrementwordIndex(){
    localStorage.setItem("wordindexkey",(parseInt(localStorage.getItem("wordindexkey"))+1).toString(10));
  }

  function clearInputField(){
    inputField = document.getElementById("answer");
    inputField.value = " ";
  }
