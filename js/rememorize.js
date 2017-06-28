//Varribles
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
function LoginCheck() {
  var playerName = document.getElementById("userName").value;
  var playerAge = document.getElementById("userAge").value;
  var playerGender = document.getElementById("userGender").value.toLowerCase();
console.log(playerName);
  if (playerAge < 13) {
    //Your too young to play.
    console.log("Your to young")
  } else {
    if (playerGender == "male") {
      console.log("your a boy!")
      genRef = "";
      genRef1 = "";
      genRef2 = "";
      genRef3 = "";
      document.getElementById('login').className += " hide";
      document.getElementById('term').classList.remove("hide");
      GameStart();
    } else if (playerGender == "female") {
      console.log("your a girl!");
      genRef = "";
      genRef1 = "";
      genRef2 = "";
      genRef3 = "";
      document.getElementById('login').className += " hide";
      document.getElementById('term').classList.remove("hide");
      GameStart();
    } else {
      // Please input your gender
    }
  }
}


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

function Read() {
  document.onkeypress = function(e) {
    if (e.keyCode === 13) {
      var textBox = document.getElementById('textBox').value;
      Print(textBox);
      textBox === "";
    };
  };
}

function PathChoice() {

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
  // UpdateScroll();
}
