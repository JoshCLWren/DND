const button = document.getElementById('button');
const playerContainer = [];

class Character {
  constructor(playerName, name, init, race) {
    this.playerName = playerName;
    this.name = name;
    this.init = Number(init);
    this.race = race;
  }

  getPlayerName() {
    return this.playerName;
  }

  getName() {
    return this.name;
  }

  getInit() {
    return this.init;
  }

  getRace() {
    return this.race;
  }
}

function printCharacter(character) {
  const node = document.createElement("P");
  const img = document.createElement("IMG");
  const div = document.createElement('DIV');
  const imgdiv = document.createElement('div');
  const textNode = document.createTextNode(`${character.playerName} ${character.name} ${character.init} ${character.race}`);
  node.appendChild(textNode);
  div.appendChild(node);
  div.setAttribute('class', 'portrait');

  const raceImages = {
    "human": 'humanfighter.jpg',
    "elf": 'elfwizard.jpg',
    "dwarf": 'dwarfcleric.jpg'
  };

  img.setAttribute('src', raceImages[character.race] || '');
  imgdiv.appendChild(img);
  div.appendChild(imgdiv);
  document.getElementById("gallery").appendChild(div);
}

function loopOverCharacter(playerContainer) {
  playerContainer.forEach(printCharacter);
}

function destroyAllCharacters() {
  document.getElementById('gallery').innerHTML = '';
}

function pcCreator(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const init = document.getElementById('init').value;
  const race = document.getElementById('race').value;
  const playerName = document.getElementById("Player-Name").value;
  
  playerContainer.push(new Character(playerName, name, init, race));
  playerContainer.sort((a, b) => b.init - a.init);
  destroyAllCharacters();
  loopOverCharacter(playerContainer);
}

function hideEnemyCreator() {
  document.getElementById('enemyCreator').style.display = 'none';
}

function showEnemyCreator() {
  document.getElementById('enemyCreator').style.display = 'block';
}    

function hidePcCreator() {
  document.getElementById('pcCreator').style.display = 'none';
}

function showPcCreator() {
  document.getElementById('pcCreator').style.display = 'block';
}    

function hideLairCreator() {
  document.getElementById('lairCreator').style.display = 'none';
}

function showLairCreator() {
  document.getElementById('lairCreator').style.display = 'block';
}      

function enemyCreator(event) {
  event.preventDefault();

  const node = document.createElement("P");
  const name = document.getElementById('enemyName').value;
  const init = document.getElementById('enemyInit').value;
  const textNode = document.createTextNode(`${name} has an initiative of: ${init}`);
  node.appendChild(textNode);
  document.getElementById("gallery").appendChild(node);
}

function lairCreator(event) {
  event.preventDefault();

  const node = document.createElement("P");
  const name = document.getElementById('lairName').value;
  const init = document.getElementById('lairInit').value;
  const textNode = document.createTextNode(`${name} has an initiative of: ${init}`);
  node.appendChild(textNode);
  document.getElementById("gallery").appendChild(node);
}
