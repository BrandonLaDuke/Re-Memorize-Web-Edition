//Varribles
var playerName = "";
var maxHealth = 100;
var playerHealth = maxHealth;
var genRef = "";
var genRef1 = "";
var genRef2 = "";
var genRef3 = "";
var year = "2086";
var vYear = "";
var cWhile = true;
var memoryHunter = false;
var leaper = false;
var userInput = "";
var selectLoop1 = true;
var selectLoop2 = true;
var selectLoop3 = true;
var sPressen = "";
var doorCodeSolution = "";
var doorCode = "";

// Passcode dependant varialbles
var sensenFuryUnlocked = false;
var sensenDOSUnlocked = false;
var rememberBailey = false;
var satPatch1 = false;
var satPatch2 = false;
// Passcode
var passcode = "";
// set print
var print = "";
// Start Game
document.ready = GameStart();


// Game start
function GameStart() {
  print = "A friend once said,";
  Print();
  Wait(500);
  print = "the memory of a single man is a fortress,";
  Print();
  Wait(5000);
  print = "more complex than the vastest of cities.";
  Print();
  print = "We invented a key for that fortress.";
  Print();
}

function Print() {
  var createE = document.createElement("P");
  var text = document.createTextNode(print);
      createE.appendChild(text);
      document.getElementById("gameplay").appendChild(createE);
}

function Wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
