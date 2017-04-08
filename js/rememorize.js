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
// Start Game
document.ready = GameStart();


// Game start
function GameStart() {
  Print("A friend once said,");
  Print("the memory of a single man is a fortress,");
  Print("more complex than the vastest of cities.");
  Print("We invented a key for that fortress.");
  Print();
  Print("Press Enter to continue.");
  Read();
}

function Clear() {
  document.onkeypress = function (e) {
    e.keyCode = 13 || window.event;
    // use e.keyCode
    document.getElementById("gameplay").innerHTML("");
  };
}

function Read() {
  document.onkeypress = function (e) {
    e.keyCode = 13 || window.event;
    // use e.keyCode
    Print("What's up?");
  };
}

function UpdateScroll() {
    var element = document.getElementById("gameplay");
    element.scrollTop = element.scrollHeight;
}

function Print(print) {
  var createE = document.createElement("P");
  if (print == null || print == "") {
    var linebreak = document.createElement("br");
    createE.appendChild(linebreak);
    document.getElementById("gameplay").appendChild(createE);
  } else {
    var text = document.createTextNode(print);
    createE.appendChild(text);
    document.getElementById("gameplay").appendChild(createE);
  }
  //Scroll after input
  UpdateScroll();
}
