var mysteryWords = ['EYE','BALL','CHATS',"FRIEND","FREEDOM","DISTANCE","LONGEST","GRATITUDE","GOVERNMENT"];
//window.index = 0;
function getNoofBoxes(){
    return mysteryWords[getIndex()].length;
}

function getmysterWords(){
    return mysteryWords[getIndex()];
}

function getIndex(){
    let index = parseInt(localStorage.getItem("indexKey"));
    return index;
}
function incrementIndex(){
    localStorage.setItem("indexKey",(parseInt(localStorage.getItem("indexKey"))+1).toString(10));
}
function updateKey(){
    localStorage.setItem("keyName",(parseInt(localStorage.getItem("keyName"))+1).toString(10));
  }
  function getLevel(){
    return "Level "+localStorage.getItem("keyName");
  }