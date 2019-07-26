var button = document.getElementById('button');
var playerContainer = [];

class Character {
  constructor(playerName, name, init, race){
  this.playerName = playerName;  
  this.name = name;
  this.init = Number(init);
  this.race = race;
}
  getPlayerName(){
    return this.playerName;
  }
  getName(){
    return this.name;
  }
  getInit(){
    return this.init;
  }
  getRace(){
    return this.race;
  }
}

function printCharacter(character){
  var node = document.createElement("P");
  var img = document.createElement("IMG");
  var div = document.createElement('DIV');
  var imgdiv = document.createElement('div');
  var textNode = document.createTextNode(character.playerName + character.name + character.init + character.race);
  node.appendChild(textNode);
  div.appendChild(node);
  event.preventDefault()
  div.setAttribute('class', 'portrait');

  if(character.race === "human"){
    img.setAttribute('src', 'humanfighter.jpg');
  }
  else if(character.race === "elf"){
    img.setAttribute('src', 'elfwizard.jpg');

  } else if(character.race === "dwarf"){
    img.setAttribute('src', 'dwarfcleric.jpg');
  };
  imgdiv.appendChild(img);
  div.appendChild(imgdiv);
  document.getElementById("gallery").appendChild(div);
}

function imager() {

}

function loopOverCharacter(playerContainer){
  for(var i = 0; i < playerContainer.length; i++){
    printCharacter(playerContainer[i]);
  }
}


function destroyAllCharacters(){
  document.getElementById('gallery').innerHTML = '';
}

function creator(){
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var init = document.getElementById('init').value;
  var race = document.getElementById('race').value;
  var playerName = document.getElementById("Player-Name").value;  
  playerContainer.push(new Character(playerName, name, init, race));
  playerContainer.sort(function(a, b){
    if(a.init > b.init){
      return -1;
    } 
    if (a.init < b.init){
      return 1;
    }
    return 0;
  })
  destroyAllCharacters();
  console.log(playerContainer);
  loopOverCharacter(playerContainer);
}


function hideEnemyCreator(){
  document.getElementById('enemyCreator').style.display ='none';
}
function showEnemyCreator(){
  document.getElementById('enemyCreator').style.display = 'block';
}    

function hidePcCreator(){
  document.getElementById('pcCreator').style.display ='none';
}
function showPcCreator(){
  document.getElementById('pcCreator').style.display = 'block';
}    

function hideLairCreator(){
  document.getElementById('lairCreator').style.display ='none';
}
function showLairCreator(){
  document.getElementById('lairCreator').style.display = 'block';
}      

function enemyCreator(){
  var node = document.createElement("P");
  var name = document.getElementById('enemyName').value;
  var init = document.getElementById('enemyInit').value;
  var img = document.createElement("IMG");
  var textNode = document.createTextNode(name +" has an iniative of:" + init);
  node.appendChild(textNode);
  document.getElementById("gallery").appendChild(node);
  event.preventDefault()}

function lairCreator(){
  var node = document.createElement("P");
  var name = document.getElementById('lairName').value;
  var init = document.getElementById('lairInit').value;
  var img = document.createElement("IMG");
  var textNode = document.createTextNode(name +" has an iniative of:" + init);
  node.appendChild(textNode);
  document.getElementById("gallery").appendChild(node);
  event.preventDefault()}


 