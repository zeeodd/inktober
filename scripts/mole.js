var input = document.getElementById("Name");
var body = document.getElementById("Body");
var fingerprint = document.getElementById("Fingerprint");
var infoDiv = document.getElementById("info-div");
var buttonDiv = document.getElementById("button-div");
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSu9bz7fL2GaSzbWeeMTtDCMTO72TDVEeJF52ha4YHbnTlZ7zvWNA6KpsrlaUhb4g/pub?output=csv';
var moleName = document.getElementById("Mole");
var green = "#46D238";
var red = "red";
var win = false;
var tie = false;

const NAME = "Name";
const EPISODE = "I just finished episode:";
const MOLE = "Das Mole is:";

const ANDREA = {
  Id: "ANDREA",
  Count: 0,
  First: 0
};

const CHRISTINA = {
  Id: "CHRISTINA",
  Count: 0,
  First: 0
};

const RHEMI = {
  Id: "RHEMI",
  Count: 0,
  First: 0
};

const ZIYAD = {
  Id: "ZIYAD",
  Count: 0,
  First: 0
};

const PLAYERS = [ANDREA, CHRISTINA, RHEMI, ZIYAD];

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    Hide();
    Init();
    setTimeout(function() { Animate(); }, 3500);
  }
});

function Debug(data) {
  console.log(data);
}

function Animate() {
  fingerprint.src = "./images/fingerprint-black.png";
  if (win) {
    body.style.backgroundColor = green;
  } else {
    body.style.backgroundColor = red;
  }

  if (tie) body.style.backgroundColor = green;
}

function Hide() {
  infoDiv.style.display = "none";
  buttonDiv.style.display = "none";
}

function Init() {
    Papa.parse(publicSpreadsheetUrl, {
    download: true,
    header: true,
    complete: function(results) {
      var data = results.data
      ParseData(data);
      DetermineWin();
    }
  })
}

function ParseData(data) {

  for (let i = 0; i < data.length; i++) {

    if (data[i][NAME].toUpperCase() == ANDREA.Id &&
        data[i][MOLE].toUpperCase() == moleName.value.toUpperCase()) {
      ANDREA.Count += 1;
      if (ANDREA.First == 0 || ANDREA.First > data[i][EPISODE]) ANDREA.First = data[i][EPISODE];
    }

    if (data[i][NAME].toUpperCase() == CHRISTINA.Id &&
        data[i][MOLE].toUpperCase() == moleName.value.toUpperCase()) {
      CHRISTINA.Count += 1;
      if (CHRISTINA.First == 0 || CHRISTINA.First > data[i][EPISODE]) CHRISTINA.First = data[i][EPISODE];
    }

    if (data[i][NAME].toUpperCase() == RHEMI.Id &&
        data[i][MOLE].toUpperCase() == moleName.value.toUpperCase()) {
      RHEMI.Count += 1;
      if (RHEMI.First == 0 || RHEMI.First > data[i][EPISODE]) RHEMI.First = data[i][EPISODE];
    }

    if (data[i][NAME].toUpperCase() == ZIYAD.Id &&
        data[i][MOLE].toUpperCase() == moleName.value.toUpperCase()) {
      ZIYAD.Count += 1;
      if (ZIYAD.First == 0 || ZIYAD.First > data[i][EPISODE]) ZIYAD.First = data[i][EPISODE];
    }

  }

  console.log(ANDREA);
  console.log(CHRISTINA);
  console.log(RHEMI);
  console.log(ZIYAD);
}

function DetermineWin() {

  var key = input.value.toUpperCase();
  var winList = [];
  var currentMax = 0;

  for (let i = 0; i < PLAYERS.length; i++) {
    if (PLAYERS[i].Count == currentMax && PLAYERS[i].Count != 0) {
      winList.push(PLAYERS[i]);
    }
    else if (PLAYERS[i].Count > currentMax && PLAYERS[i].Count != 0) {
      currentMax = PLAYERS[i].Count;
      winList = [];
      winList.push(PLAYERS[i]);
    }
  }

  if (winList.length > 1) {
    console.log(winList);

    var earliest = 99;
    var winner = winList[0];
    var tieList = [];

    for (let i = 0; i < winList.length; i++) {
      if (winList[i].First < earliest) {
        winner = winList[i];
        earliest = winList[i].First;
        tieList.push(winList[i]);
      } else if (winList[i].First == earliest) {
        tieList.push(winList[i]);
      }
    }
    if (input.value.toUpperCase() == winner.Id && tieList.length <= 1) win = true;
    else if (tieList.length > 0) {
      for (let i = 0; i < tieList.length; i++) {
        if (input.value.toUpperCase() == tieList[i].Id) {
          setTimeout(function() { alert("THERE'S A HARD TIE BETWEEN YOU AND SOMEONE ELSE!"); }, 3500);
          tie = true;
        }
      }
    }
  } else {
    if (input.value.toUpperCase() == winList[0].Id) win = true;
  }

}

function Validate() {
  alert("cock");
}
